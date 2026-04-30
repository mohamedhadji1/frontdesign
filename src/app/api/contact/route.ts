import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, phone, company, message, captchaToken, subject } = await request.json();

    if (!captchaToken) {
      return NextResponse.json({ success: false, error: 'reCAPTCHA token is required' }, { status: 400 });
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
      return NextResponse.json({ success: false, error: 'Invalid reCAPTCHA token' }, { status: 400 });
    }
    // Create a transporter using Gmail.
    // Remember to use an App Password here in production via env vars.
    // E.g., pass: process.env.EMAIL_APP_PASSWORD
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'mohamedhadji603@gmail.com', // Replace with sender email
        pass: process.env.EMAIL_PASS || 'your-app-password', // Replace with your standard App Password from Google
      },
    });

    const mailOptions = {
      from: email,
      to: 'mohamedhadji603@gmail.com',
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