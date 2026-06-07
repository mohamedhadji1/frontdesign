import { NextRequest, NextResponse } from 'next/server';
import { getAdminDb } from '@/lib/firebase-admin';
import { cookies } from 'next/headers';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

// Initialize Upstash Redis client gracefully
let ratelimit: Ratelimit | null = null;
try {
  if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
    const redis = new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    });
    ratelimit = new Ratelimit({
      redis: redis,
      limiter: Ratelimit.slidingWindow(20, '10 s'),
    });
  } else {
    console.warn("UPSTASH_REDIS_REST_URL or UPSTASH_REDIS_REST_TOKEN is missing. Admin API rate limiting is disabled.");
  }
} catch (e) {
  console.warn("Failed to initialize Upstash Redis rate limiter:", e);
}

export async function POST(request: NextRequest) {
  // Strict Content-Type validation
  if (!request.headers.get('content-type')?.includes('application/json')) {
    return NextResponse.json({ error: 'Unsupported Media Type' }, { status: 415 });
  }

  // Read session cookie
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('admin_session');
  
  if (!sessionCookie?.value) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const db = getAdminDb();
    const sessionDoc = await db.collection('admin_sessions').doc(sessionCookie.value).get();

    if (!sessionDoc.exists) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const sessionData = sessionDoc.data();
    if (!sessionData || sessionData.expiresAt < Date.now()) {
      return NextResponse.json({ error: 'Session expired' }, { status: 401 });
    }

    // Replace IP-based rate limiter with session-based Redis rate limiter
    const email = sessionData.email;
    const maskedEmail = email ? email.replace(/(.{1,3})(.*)(@.*)/, "$1***$3") : "unknown";

    if (ratelimit) {
      const { success, reset } = await ratelimit.limit(email);
      
      if (!success) {
        const retryAfter = Math.ceil((reset - Date.now()) / 1000);
        return NextResponse.json(
          { error: 'Too many requests' },
          { 
            status: 429,
            headers: {
              'Retry-After': retryAfter.toString()
            }
          }
        );
      }
    }

    const body = await request.json();
    const { action, data } = body;

    if (!action || typeof action !== 'string') {
      return NextResponse.json({ error: 'Invalid action format' }, { status: 400 });
    }

    if (!data || typeof data !== 'object') {
      return NextResponse.json({ error: 'Invalid data format' }, { status: 400 });
    }

    if (action === 'addEvent') {
      // Validate inputs
      if (!data.title || typeof data.title !== 'string' || data.title.length > 200) {
         return NextResponse.json({ error: 'Invalid or missing title' }, { status: 400 });
      }
      if (!data.date || typeof data.date !== 'string' || data.date.length > 50) {
         return NextResponse.json({ error: 'Invalid or missing date' }, { status: 400 });
      }

      console.log(`[ADMIN] Event added by ${maskedEmail} at ${new Date().toISOString()}`);

      await db.collection('events').add({
        title: data.title,
        date: data.date,
        createdAt: new Date().toISOString(),
      });

      return NextResponse.json({ message: 'Event successfully posted!' }, { status: 200 });
    }

    if (action === 'addNews') {
      // Validate inputs
      if (!data.title || typeof data.title !== 'string' || data.title.length > 200) {
         return NextResponse.json({ error: 'Invalid or missing title' }, { status: 400 });
      }
      if (!data.date || typeof data.date !== 'string' || data.date.length > 50) {
         return NextResponse.json({ error: 'Invalid or missing date' }, { status: 400 });
      }
      if (!data.excerpt || typeof data.excerpt !== 'string' || data.excerpt.length > 1000) {
         return NextResponse.json({ error: 'Invalid or missing excerpt' }, { status: 400 });
      }
      if (!data.link || typeof data.link !== 'string' || data.link.length > 500) {
         return NextResponse.json({ error: 'Invalid or missing link' }, { status: 400 });
      }

      console.log(`[ADMIN] News added by ${maskedEmail} at ${new Date().toISOString()}`);

      let imageDownloadUrl = '';
      
      if (data.imageBase64 && typeof data.imageBase64 === 'string' && data.imageBase64.startsWith('data:image/')) {
        // Enforce strictly private server-side credentials. Never fallback to NEXT_PUBLIC.
        const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
        const uploadPreset = process.env.CLOUDINARY_UPLOAD_PRESET;

        if (!cloudName || !uploadPreset) {
          return NextResponse.json({ error: 'Cloudinary configuration missing on server' }, { status: 500 });
        }

        const uploadRes = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            file: data.imageBase64,
            upload_preset: uploadPreset
          }),
        });

        const uploadData = await uploadRes.json();
        if (!uploadRes.ok) {
          throw new Error(uploadData.error?.message || 'Failed to upload image to Cloudinary');
        }
        imageDownloadUrl = uploadData.secure_url;
      } else {
        return NextResponse.json({ error: 'Valid base64 image string is required' }, { status: 400 });
      }

      await db.collection('news').add({
        title: data.title,
        date: data.date,
        image: imageDownloadUrl,
        excerpt: data.excerpt,
        link: data.link,
        createdAt: new Date().toISOString(),
      });

      return NextResponse.json({ message: 'News successfully posted!' }, { status: 200 });
    }

    return NextResponse.json({ error: 'Unknown action' }, { status: 400 });
  } catch {
    console.error('Admin API error occurred [Redacted]');
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}