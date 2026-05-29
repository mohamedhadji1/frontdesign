import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, phone, company, message, captchaToken, subject } = await request.json();

    if (!captchaToken) {
      return NextResponse.json({ success: false, error: 'reCAPTCHA token is required' }, { status: 400 });
    }

    // Verify the reCAPTCHA token with a defensive 8-second timeout
    const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`,
      signal: AbortSignal.timeout(8000),
    });

    const verifyData = await verifyRes.json();

    if (!verifyData.success) {
      return NextResponse.json({ success: false, error: 'Invalid reCAPTCHA token' }, { status: 400 });
    }
    // Dynamic SMTP configuration (supports Gmail, Outlook / Office 365, custom SMTP, etc.)
    const smtpHost = process.env.EMAIL_HOST || 'smtp.gmail.com';
    const smtpPort = parseInt(process.env.EMAIL_PORT || '465');
    const secure = smtpPort === 465;

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: secure, // true for port 465, false for port 587 (STARTTLS)
      auth: {
        user: process.env.EMAIL_USER || 'mohamedhadji603@gmail.com',
        pass: process.env.EMAIL_PASS || 'your-app-password',
      },
      connectionTimeout: 8000, // 8 seconds limit
      greetingTimeout: 8000,   // 8 seconds limit
      socketTimeout: 10000,    // 10 seconds socket limit
      tls: {
        ciphers: 'SSLv3',
        rejectUnauthorized: false, // bypass certification validation issues
      },
    });

    const mailOptions = {
      from: email,
      to: 'mohamed.hajji@keystone.tn',
      subject: subject || `New Contact Form Submission from ${name}`,
      text: `
        You have a new contact form submission.
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Company: ${company}
        
        Message:
        ${message}
      `,
      html: `
        <motion.h2>New Contact Form Submission</motion.h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }
}