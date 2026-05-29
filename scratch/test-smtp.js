// scratch/test-smtp.js
const nodemailer = require('nodemailer');
require('dotenv').config({ path: '.env.local' });

async function test() {
  console.log("Loading environment variables...");
  const user = process.env.EMAIL_USER || 'mohamedhadji603@gmail.com';
  const pass = process.env.EMAIL_PASS || 'your-app-password';
  const to = 'mohamed.hajji@keystone.tn';

  console.log(`Configured Sender User: ${user}`);
  console.log(`Configured Receiver: ${to}`);
  console.log(`Password length: ${pass ? pass.length : 0}`);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: user,
      pass: pass,
    },
    connectionTimeout: 5000,
    greetingTimeout: 5000,
    socketTimeout: 5000,
  });

  console.log("Testing connection...");
  try {
    await transporter.verify();
    console.log("SUCCESS: SMTP transporter is verified and ready to send!");
  } catch (error) {
    console.error("FAIL: Transporter verification failed!");
    console.error(error);
  }
}

test();
