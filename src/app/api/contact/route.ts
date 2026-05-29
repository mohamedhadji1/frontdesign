import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Exquisite responsive HTML Email Template Generator
function generateEmailTemplate({
  name,
  email,
  phone,
  company,
  message,
  subject,
  isIncident,
}: {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  subject: string;
  isIncident: boolean;
}) {
  const brandRed = '#dc2626';
  const darkZinc = '#09090b';
  
  const formattedMessage = message.trim().replace(/\n/g, '<br/>');

  // Detect severity if incident
  let severityColor = '#71717a';
  let severityLabel = 'LOW';
  if (isIncident) {
    if (subject.includes('CRITICAL')) {
      severityColor = '#dc2626';
      severityLabel = '🚨 CRITICAL';
    } else if (subject.includes('HIGH')) {
      severityColor = '#ea580c';
      severityLabel = '🟠 HIGH';
    } else if (subject.includes('MEDIUM')) {
      severityColor = '#d97706';
      severityLabel = '🟡 MEDIUM';
    } else {
      severityColor = '#16a34a';
      severityLabel = '🟢 LOW';
    }
  }

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${subject}</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      background-color: #f9fafb;
      margin: 0;
      padding: 0;
      -webkit-font-smoothing: antialiased;
    }
    .wrapper {
      width: 100%;
      background-color: #f9fafb;
      padding: 40px 20px;
      box-sizing: border-box;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.02);
      border: 1px solid #f1f5f9;
    }
    .header {
      background-color: ${darkZinc};
      padding: 30px 40px;
      text-align: left;
      border-bottom: 3px solid ${brandRed};
    }
    .header-logo {
      color: #ffffff;
      font-size: 20px;
      font-weight: 900;
      letter-spacing: 3px;
      text-transform: uppercase;
      margin: 0;
    }
    .content {
      padding: 40px;
    }
    .title {
      font-size: 18px;
      font-weight: 800;
      color: #09090b;
      margin-top: 0;
      margin-bottom: 24px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .badge {
      display: inline-block;
      padding: 6px 12px;
      border-radius: 9999px;
      font-size: 10px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #ffffff;
      margin-bottom: 24px;
    }
    .grid {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 30px;
    }
    .grid td {
      padding: 12px 0;
      border-bottom: 1px solid #f1f5f9;
    }
    .grid .label {
      font-size: 10px;
      font-weight: 700;
      color: #a1a1aa;
      text-transform: uppercase;
      letter-spacing: 1px;
      width: 30%;
    }
    .grid .value {
      font-size: 14px;
      color: #27272a;
      font-weight: 600;
    }
    .message-card {
      background-color: #fafafa;
      border-radius: 12px;
      padding: 24px;
      border: 1px dashed #e4e4e7;
      margin-top: 10px;
      margin-bottom: 30px;
    }
    .message-title {
      font-size: 10px;
      font-weight: 700;
      color: #71717a;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-top: 0;
      margin-bottom: 12px;
    }
    .message-content {
      font-size: 13.5px;
      line-height: 1.6;
      color: #18181b;
      font-weight: 550;
    }
    .footer {
      background-color: #fafafa;
      padding: 24px 40px;
      text-align: center;
      border-top: 1px solid #f1f5f9;
    }
    .footer-text {
      font-size: 11px;
      color: #a1a1aa;
      line-height: 1.6;
      margin: 0;
      font-weight: 500;
    }
    .btn {
      display: inline-block;
      background-color: ${brandRed};
      color: #ffffff !important;
      text-decoration: none;
      font-size: 11px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 1px;
      padding: 14px 28px;
      border-radius: 9999px;
      box-shadow: 0 4px 12px rgba(220, 38, 38, 0.2);
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="container">
      <div class="header">
        <div class="header-logo">KEYSTONE</div>
      </div>
      <div class="content">
        <h2 class="title">${isIncident ? '🚨 Incident Disclosure Logged' : '📩 New Contact Inquiry'}</h2>
        
        ${isIncident ? `<div class="badge" style="background-color: ${severityColor};">${severityLabel} SEVERITY</div>` : ''}

        <table class="grid">
          <tr>
            <td class="label">Full Name</td>
            <td class="value">${name}</td>
          </tr>
          <tr>
            <td class="label">Email</td>
            <td class="value"><a href="mailto:${email}" style="color: ${brandRed}; text-decoration: none;">${email}</a></td>
          </tr>
          <tr>
            <td class="label">Phone</td>
            <td class="value">${phone || 'Not provided'}</td>
          </tr>
          <tr>
            <td class="label">Company</td>
            <td class="value">${company || 'Not provided'}</td>
          </tr>
        </table>

        <div class="message-card">
          <h4 class="message-title">${isIncident ? 'Incident Context & Details' : 'Message Contents'}</h4>
          <div class="message-content">
            ${formattedMessage}
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 10px;">
          <a href="mailto:${email}" class="btn">Reply Directly</a>
        </div>
      </div>
      <div class="footer">
        <p class="footer-text">
          Keystone Security Operations Center &bull; Automated Log System<br/>
          This is an automatically generated transmission. Dispatched via Resend.
        </p>
      </div>
    </div>
  </div>
</body>
</html>
  `;
}

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

    const emailUser = process.env.EMAIL_USER || 'resend';
    const emailPass = process.env.EMAIL_PASS || 're_bAqFd3Gf_M6WguQL1ANqwDEBsx6CMkeqK';
    const emailHost = process.env.EMAIL_HOST || 'smtp.resend.com';

    // Check if the current subject belongs to an incident report
    const isIncident = subject && (subject.includes('Incident') || subject.includes('🚨'));
    const finalSubject = subject || `New Contact Form Submission from ${name}`;

    const mailOptions = {
      from: 'Keystone <onboarding@resend.dev>', // default verified sender on Resend
      to: 'mohamed.hajji@keystone.tn',
      replyTo: email, // reply directly to the customer
      subject: finalSubject,
      text: `
        You have a new submission.
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Company: ${company}
        
        Message:
        ${message}
      `,
      html: generateEmailTemplate({
        name,
        email,
        phone,
        company,
        message,
        subject: finalSubject,
        isIncident,
      }),
    };

    // If Resend API Key is used, send via ultra-reliable HTTPS REST API to bypass ISP port blocks
    if (emailPass.startsWith('re_')) {
      console.log('Sending email via Resend HTTPS REST API (bypassing SMTP)...');
      
      const senderEmail = emailHost === 'smtp.resend.com' ? 'onboarding@resend.dev' : 'contact@keystone.tn';
      
      const resendRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${emailPass}`,
        },
        body: JSON.stringify({
          from: `Keystone Portal <${senderEmail}>`,
          to: mailOptions.to,
          reply_to: mailOptions.replyTo,
          subject: mailOptions.subject,
          text: mailOptions.text,
          html: mailOptions.html,
        }),
        signal: AbortSignal.timeout(10000),
      });

      if (!resendRes.ok) {
        const errorText = await resendRes.text();
        throw new Error(`Resend HTTPS API error: ${errorText}`);
      }

      console.log('Email successfully sent via Resend HTTPS API!');
      return NextResponse.json({ success: true, message: 'Email sent successfully via HTTP API!' });
    }

    // Otherwise, fallback to standard SMTP
    console.log('Sending email via fallback SMTP...');
    const smtpPort = parseInt(process.env.EMAIL_PORT || '587');
    const secure = smtpPort === 465;

    const transporter = nodemailer.createTransport({
      host: emailHost,
      port: smtpPort,
      secure: secure,
      auth: {
        user: emailUser,
        pass: emailPass,
      },
      connectionTimeout: 8000,
      greetingTimeout: 8000,
      socketTimeout: 10000,
      tls: {
        rejectUnauthorized: false,
      },
    });

    await transporter.sendMail(mailOptions);
    console.log('Email successfully sent via SMTP!');
    return NextResponse.json({ success: true, message: 'Email sent successfully via SMTP!' });

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }
}