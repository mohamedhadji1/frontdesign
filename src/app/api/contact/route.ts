import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { getAdminDb } from '@/lib/firebase-admin';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

// Initialize Upstash Redis client gracefully for contact form
let contactRatelimit: Ratelimit | null = null;
try {
  if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
    const redis = new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    });
    // Strict rate limiter for contact attempts (5 per hour)
    contactRatelimit = new Ratelimit({
      redis: redis,
      limiter: Ratelimit.slidingWindow(5, '1 h'),
    });
  } else {
    console.warn("UPSTASH_REDIS_REST_URL or UPSTASH_REDIS_REST_TOKEN is missing. Contact API rate limiting is disabled.");
  }
} catch (e) {
  console.warn("Failed to initialize Upstash Redis contact rate limiter:", e);
}

// Simple HTML escaping function to prevent XSS
function escapeHtml(unsafe: string) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Exquisite responsive HTML Email Template Generator
function generateEmailTemplate({
  name,
  email,
  phone,
  company,
  message,
  subject,
  isIncident,
  isCareer,
  linkedin,
  portfolio,
  offer,
  cvFileName,
}: {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  subject: string;
  isIncident: boolean;
  isCareer?: boolean;
  linkedin?: string;
  portfolio?: string;
  offer?: string;
  cvFileName?: string;
}) {
  const brandRed = '#dc2626';
  const darkZinc = '#09090b';

  // Sanitize all inputs before using them in the template
  const sName = escapeHtml(name);
  const sEmail = escapeHtml(email);
  const sPhone = escapeHtml(phone || 'Not provided');
  const sCompany = escapeHtml(company || 'Not provided');
  const sSubject = escapeHtml(subject);
  const sMessage = escapeHtml(message).replace(/\n/g, '<br/>');
  const sLinkedin = linkedin ? escapeHtml(linkedin) : '';
  const sPortfolio = portfolio ? escapeHtml(portfolio) : '';
  const sOffer = offer ? escapeHtml(offer) : '';
  const sCvFileName = cvFileName ? escapeHtml(cvFileName) : '';

  // Detect severity if incident
  let severityColor = '#71717a';
  let severityLabel = 'LOW';
  if (isIncident) {
    if (sSubject.includes('CRITICAL')) {
      severityColor = '#dc2626';
      severityLabel = '🚨 CRITICAL';
    } else if (sSubject.includes('HIGH')) {
      severityColor = '#ea580c';
      severityLabel = '🟠 HIGH';
    } else if (sSubject.includes('MEDIUM')) {
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
  <title>${sSubject}</title>
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
        <h2 class="title">
          ${isIncident 
            ? '🚨 Incident Disclosure Logged' 
            : isCareer 
              ? '💼 New Career Application' 
              : '📩 New Contact Inquiry'}
        </h2>
        
        ${isIncident ? `<div class="badge" style="background-color: ${severityColor};">${severityLabel} SEVERITY</div>` : ''}

        <table class="grid">
          <tr>
            <td class="label">Full Name</td>
            <td class="value">${sName}</td>
          </tr>
          <tr>
            <td class="label">Email</td>
            <td class="value"><a href="mailto:${sEmail}" style="color: ${brandRed}; text-decoration: none;">${sEmail}</a></td>
          </tr>
          <tr>
            <td class="label">Phone</td>
            <td class="value">${sPhone}</td>
          </tr>
          ${isCareer ? `
          <tr>
            <td class="label">Position</td>
            <td class="value">${sOffer || 'Not specified'}</td>
          </tr>
          <tr>
            <td class="label">LinkedIn</td>
            <td class="value">${sLinkedin ? `<a href="${sLinkedin}" target="_blank" style="color: ${brandRed}; text-decoration: none;">${sLinkedin}</a>` : 'Not provided'}</td>
          </tr>
          <tr>
            <td class="label">Portfolio / GitHub</td>
            <td class="value">${sPortfolio ? `<a href="${sPortfolio}" target="_blank" style="color: ${brandRed}; text-decoration: none;">${sPortfolio}</a>` : 'Not provided'}</td>
          </tr>
          <tr>
            <td class="label">Attachment</td>
            <td class="value">${sCvFileName || 'None'}</td>
          </tr>
          ` : `
          <tr>
            <td class="label">Company</td>
            <td class="value">${sCompany}</td>
          </tr>
          `}
        </table>

        <div class="message-card">
          <h4 class="message-title">
            ${isIncident 
              ? 'Incident Context & Details' 
              : isCareer 
                ? 'Cover Letter / Motivation Message' 
                : 'Message Contents'}
          </h4>
          <div class="message-content">
            ${sMessage}
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 10px;">
          <a href="mailto:${sEmail}" class="btn">Reply Directly</a>
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

export async function POST(request: NextRequest) {
  try {
    // Strict Content-Type validation
    if (!request.headers.get('content-type')?.includes('application/json')) {
      return NextResponse.json({ error: 'Unsupported Media Type' }, { status: 415 });
    }

    // IP-based rate limiting for the contact form
    if (contactRatelimit) {
      const ip = (request as any).ip || request.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown';
      const { success, reset } = await contactRatelimit.limit(`contact_form_${ip}`);
      
      if (!success) {
        const retryAfter = Math.ceil((reset - Date.now()) / 1000);
        return NextResponse.json(
          { success: false, error: 'Too many submissions. Please try again later.' },
          { 
            status: 429,
            headers: {
              'Retry-After': retryAfter.toString()
            }
          }
        );
      }
    }

    const { name, email, phone, company, message, captchaToken, subject, cvFileData, cvFileName, linkedin, portfolio, offer } = await request.json();

    if (!captchaToken) {
      return NextResponse.json({ success: false, error: 'reCAPTCHA token is required' }, { status: 400 });
    }

    const isIncident = subject && (subject.includes('Incident') || subject.includes('🚨'));

    const secretKey = process.env.RECAPTCHA_SECRET_KEY;

    if (!secretKey) {
      console.error('CRITICAL: RECAPTCHA_SECRET_KEY is missing or unconfigured.');
      return NextResponse.json({ success: false, error: 'Server configuration error' }, { status: 500 });
    }

    // Verify the reCAPTCHA token using standard v2 siteverify API
    const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        secret: secretKey,
        response: captchaToken,
      }).toString(),
      signal: AbortSignal.timeout(8000),
    });

    const verifyData = await verifyRes.json();

    if (!verifyData.success) {
      return NextResponse.json({ success: false, error: 'Invalid reCAPTCHA token' }, { status: 400 });
    }

    // Securely log to Firestore backend (preventing client-side unauthorized writes)
    try {
      const db = getAdminDb();
      const collectionName = subject && (subject.includes('Incident') || subject.includes('🚨')) ? 'incidents' : 'contacts';
      await db.collection(collectionName).add({
        name,
        email,
        phone: phone || '',
        company: company || '',
        subject: subject || '',
        message,
        hasAttachment: !!cvFileData,
        createdAt: new Date().toISOString(),
      });
    } catch (dbError) {
      console.error('Failed to log to Firestore:', dbError);
      // We log the error but don't fail the request so the email still sends
    }

    const emailUser = process.env.EMAIL_USER || 'resend';
    const emailPass = process.env.EMAIL_PASS;
    const emailHost = process.env.EMAIL_HOST || 'smtp.resend.com';

    if (!emailPass) {
      console.error('CRITICAL: EMAIL_PASS environment variable is missing. Aborting to prevent hardcoded key usage.');
      return NextResponse.json({ success: false, error: 'Server configuration error' }, { status: 500 });
    }

    // Check if the current subject belongs to an incident report (reuses isIncident from reCAPTCHA verification above)
    const cleanName = name ? name.replace(/[\r\n]/g, ' ').trim() : 'Anonymous';
    const finalSubject = subject || `New Contact Form Submission from ${cleanName}`;

    // Use environment variable for the destination email, falling back to the verified Resend email for testing
    const destinationEmail = process.env.CONTACT_DESTINATION_EMAIL || 'mohamed.hajji@keystone.tn';

    const isCareer = !!subject && subject.includes('Career Application:');

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mailOptions: any = {
      from: 'Keystone <onboarding@resend.dev>', // default verified sender on Resend
      to: destinationEmail,
      replyTo: email, // reply directly to the customer
      subject: finalSubject,
      text: isCareer
        ? `You have a new Career Application.

Full Name: ${name}
Email Address: ${email}
Phone Number: ${phone || 'Not provided'}
LinkedIn Profile URL: ${linkedin || 'Not provided'}
Portfolio / GitHub URL (Optional): ${portfolio || 'Not provided'}
Position: ${offer || 'Not specified'}
Attachment PDF: ${cvFileName || 'None'}

Cover Letter / Motivation Message:
${message}`
        : `You have a new submission.

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Company: ${company || 'Not provided'}

Message:
${message}`,
      html: generateEmailTemplate({
        name,
        email,
        phone,
        company,
        message,
        subject: finalSubject,
        isIncident,
        isCareer,
        linkedin,
        portfolio,
        offer,
        cvFileName,
      }),
    };

    if (cvFileData && cvFileName) {
      mailOptions.attachments = [
        {
          filename: cvFileName,
          content: cvFileData,
          encoding: 'base64',
        },
      ];
    }

    // If Resend API Key is used, send via ultra-reliable HTTPS REST API to bypass ISP port blocks
    if (emailPass.startsWith('re_')) {
      console.log('Sending email via Resend HTTPS REST API (bypassing SMTP)...');

      const senderEmail = emailHost === 'smtp.resend.com' ? 'onboarding@resend.dev' : 'contact@keystone.tn';

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const resendPayload: any = {
        from: `Keystone Portal <${senderEmail}>`,
        to: mailOptions.to,
        reply_to: mailOptions.replyTo,
        subject: mailOptions.subject,
        text: mailOptions.text,
        html: mailOptions.html,
      };

      if (cvFileData && cvFileName) {
        resendPayload.attachments = [
          {
            filename: cvFileName,
            content: cvFileData,
          },
        ];
      }

      const resendRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${emailPass}`,
        },
        body: JSON.stringify(resendPayload),
        signal: AbortSignal.timeout(10000),
      });

      if (!resendRes.ok) {
        const errorText = await resendRes.text();
        console.error('Resend API response:', errorText);
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
        rejectUnauthorized: true,
      },
    });

    await transporter.sendMail(mailOptions);
    console.log('Email successfully sent via SMTP!');
    return NextResponse.json({ success: true, message: 'Email sent successfully via SMTP!' });

  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error sending email:', errorMsg);
    return NextResponse.json({ success: false, error: `Failed to send email: ${errorMsg}` }, { status: 500 });
  }
}