// Admin Authentication API route
import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { cookies } from 'next/headers';
import { getAdminDb } from '@/lib/firebase-admin';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

// Initialize Upstash Redis client gracefully
let loginRatelimit: Ratelimit | null = null;
try {
  if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
    const redis = new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    });
    // Strict rate limiter for login attempts (5 per 15 minutes)
    loginRatelimit = new Ratelimit({
      redis: redis,
      limiter: Ratelimit.slidingWindow(5, '15 m'),
    });
  } else {
    console.warn("UPSTASH_REDIS_REST_URL or UPSTASH_REDIS_REST_TOKEN is missing. Admin API rate limiting is disabled.");
  }
} catch (e) {
  console.warn("Failed to initialize Upstash Redis login rate limiter:", e);
}

export async function POST(request: NextRequest) {
  try {
    // Strict Content-Type validation
    if (!request.headers.get('content-type')?.includes('application/json')) {
      return NextResponse.json({ error: 'Unsupported Media Type' }, { status: 415 });
    }

    const body = await request.json();
    const { action, email, password, captchaToken } = body;

    const cookieStore = await cookies();

    if (action === 'check-session') {
      const sessionCookie = cookieStore.get('admin_session');
      if (!sessionCookie?.value) {
        return NextResponse.json({ valid: false }, { status: 401 });
      }

      const db = getAdminDb();
      const sessionDoc = await db.collection('admin_sessions').doc(sessionCookie.value).get();

      if (!sessionDoc.exists) {
        return NextResponse.json({ valid: false }, { status: 401 });
      }

      const sessionData = sessionDoc.data();
      if (!sessionData || sessionData.expiresAt < Date.now()) {
        return NextResponse.json({ valid: false }, { status: 401 });
      }

      return NextResponse.json({ valid: true }, { status: 200 });
    }

    if (action === 'logout') {
      const sessionCookie = cookieStore.get('admin_session');
      if (sessionCookie?.value) {
        const db = getAdminDb();
        await db.collection('admin_sessions').doc(sessionCookie.value).delete();
      }
      
      cookieStore.delete('admin_session');
      return NextResponse.json({ message: 'Logged out successfully' }, { status: 200 });
    }

    if (action === 'login') {
      // IP-based rate limiting to prevent brute force
      if (loginRatelimit) {
        // More robust IP extraction (preferring standard NextRequest ip or leftmost/trusted proxy)
        const ip = (request as any).ip || request.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown';
        const { success, reset } = await loginRatelimit.limit(`login_attempt_${ip}`);
        
        if (!success) {
          const retryAfter = Math.ceil((reset - Date.now()) / 1000);
          return NextResponse.json(
            { error: 'Too many login attempts. Please try again later.' },
            { 
              status: 429,
              headers: {
                'Retry-After': retryAfter.toString()
              }
            }
          );
        }
      }

      if (!captchaToken) {
        return NextResponse.json({ error: 'reCAPTCHA token is required' }, { status: 400 });
      }

      // Verify the reCAPTCHA token
      const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          secret: process.env.RECAPTCHA_SECRET_KEY || '',
          response: captchaToken,
        }).toString(),
      });

      const verifyData = await verifyRes.json();

      if (!verifyData.success) {
        return NextResponse.json({ error: 'Invalid reCAPTCHA token' }, { status: 400 });
      }
      
      // Verify credentials against environment variables
      const adminEmail = process.env.ADMIN_EMAIL;
      const adminPassword = process.env.ADMIN_PASSWORD;

      if (!adminEmail || !adminPassword) {
        return NextResponse.json(
          { error: 'Admin credentials not configured' },
          { status: 500 }
        );
      }

      // Defense-in-depth: Constant-time comparison to prevent timing attacks
      // We hash both inputs first to ensure they are the same length before comparing
      const expectedEmailHash = crypto.createHash('sha256').update(adminEmail).digest();
      const actualEmailHash = crypto.createHash('sha256').update(email || '').digest();
      const expectedPasswordHash = crypto.createHash('sha256').update(adminPassword).digest();
      const actualPasswordHash = crypto.createHash('sha256').update(password || '').digest();

      const isEmailValid = crypto.timingSafeEqual(expectedEmailHash, actualEmailHash);
      const isPasswordValid = crypto.timingSafeEqual(expectedPasswordHash, actualPasswordHash);

      if (!isEmailValid || !isPasswordValid) {
        return NextResponse.json(
          { error: 'Invalid email or password' },
          { status: 401 }
        );
      }

      // Tier 3: Opaque tokens + server-side sessions
      const token = crypto.randomBytes(32).toString('hex');
      const expiresAt = Date.now() + 2 * 60 * 60 * 1000; // 2 hours instead of 24

      const db = getAdminDb();
      await db.collection('admin_sessions').doc(token).set({
        email,
        createdAt: Date.now(),
        expiresAt,
      });

      cookieStore.set('admin_session', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 2 * 60 * 60, // 2 hours in seconds
        path: '/',
      });

      return NextResponse.json(
        { message: 'Login successful' },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { error: 'Unknown action' },
      { status: 400 }
    );
  } catch {
    console.error('Auth API error occurred [Redacted]');
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
