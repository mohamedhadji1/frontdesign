import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { action, email, password, captchaToken } = body;

    if (action === 'login') {
      if (!captchaToken) {
        return NextResponse.json({ error: 'reCAPTCHA token is required' }, { status: 400 });
      }

      // Verify the reCAPTCHA token
      const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`,
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

      if (email !== adminEmail || password !== adminPassword) {
        return NextResponse.json(
          { error: 'Invalid email or password' },
          { status: 401 }
        );
      }

      // Generate simple token (in production, use JWT)
      const token = Buffer.from(`${email}:${Date.now()}`).toString('base64');

      return NextResponse.json(
        { message: 'Login successful', token },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { error: 'Unknown action' },
      { status: 400 }
    );
  } catch (error) {
    console.error('Auth API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
