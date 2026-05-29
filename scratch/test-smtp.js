// scratch/test-smtp.js
const nodemailer = require('nodemailer');
require('dotenv').config({ path: '.env.local' });

async function test() {
  console.log("Loading environment variables...");
  const host = process.env.EMAIL_HOST || 'smtp.gmail.com';
  const port = parseInt(process.env.EMAIL_PORT || '465');
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  const to = 'mohamed.hajji@keystone.tn';

  console.log(`Configured Host: ${host}`);
  console.log(`Configured Port: ${port}`);
  console.log(`Configured User: ${user}`);
  console.log(`Configured Receiver: ${to}`);
  console.log(`Password length: ${pass ? pass.length : 0}`);

  const transporter = nodemailer.createTransport({
    host: host,
    port: port,
    secure: port === 465,
    auth: {
      user: user,
      pass: pass,
    },
    connectionTimeout: 8000,
    greetingTimeout: 8000,
    socketTimeout: 10000,
    tls: {
      ciphers: 'SSLv3',
      rejectUnauthorized: false
    }
  });

  console.log("Testing connection to SMTP...");
  try {
    await transporter.verify();
    console.log("SUCCESS: SMTP transporter is verified and ready to send!");
  } catch (error) {
    console.error("FAIL: Transporter verification failed!");
    console.error(error);
  }
}

test();
