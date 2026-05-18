import { NextRequest, NextResponse } from 'next/server';
import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

// Initialize Firebase Admin SDK server-side
const initializeAdminApp = () => {
  if (getApps().length > 0) {
    return getApps()[0];
  }

  const serviceAccount = JSON.parse(
    process.env.FIREBASE_ADMIN_SDK_JSON || '{}'
  );

  return initializeApp({
    credential: cert(serviceAccount),
  });
};

// Middleware to verify Bearer token
function verifyAdminToken(request: NextRequest): boolean {
  const authHeader = request.headers.get('Authorization');

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return false;
  }

  const token = authHeader.slice(7); // Remove 'Bearer ' prefix

  // Token is valid if it's not empty (simple validation)
  // In production, you'd validate JWT or check against a session store
  return token.length > 0;
}

// Rate limiting (simple in-memory, use Redis in production)
const requestCounts = new Map<string, number[]>();

function checkRateLimit(ip: string, maxRequests: number = 5, windowMs: number = 60000): boolean {
  const now = Date.now();
  const requests = requestCounts.get(ip) || [];

  // Filter out requests outside the window
  const recentRequests = requests.filter(time => now - time < windowMs);

  if (recentRequests.length >= maxRequests) {
    return false;
  }

  recentRequests.push(now);
  requestCounts.set(ip, recentRequests);
  return true;
}

export async function POST(request: NextRequest) {
  // Verify admin token
  if (!verifyAdminToken(request)) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  // Check rate limiting
  const ip = request.headers.get('x-forwarded-for') || 'unknown';
  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: 'Too many requests' },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();
    const { action, data } = body;

    // Initialize admin app
    const admin = initializeAdminApp();
    const db = getFirestore(admin);

    if (action === 'addEvent') {
      // Log the action for Assessment trail
      console.log(`[ADMIN] Event added by ${ip} at ${new Date().toISOString()}`);

      await db.collection('events').add({
        title: data.title,
        date: data.date,
        createdAt: new Date().toISOString(),
      });

      return NextResponse.json(
        { message: 'Event successfully posted!' },
        { status: 200 }
      );
    }

    if (action === 'addNews') {
      console.log(`[ADMIN] News added by ${ip} at ${new Date().toISOString()}`);

      await db.collection('news').add({
        title: data.title,
        date: data.date,
        image: data.image,
        excerpt: data.excerpt,
        link: data.link,
        createdAt: new Date().toISOString(),
      });

      return NextResponse.json(
        { message: 'News successfully posted!' },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { error: 'Unknown action' },
      { status: 400 }
    );
  } catch (error) {
    console.error('Admin API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
