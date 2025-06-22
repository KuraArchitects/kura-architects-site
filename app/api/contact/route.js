import nodemailer from 'nodemailer';

export async function POST(request) {
  const { name, email, message } = await request.json();

  const transporter = nodemailer.createTransport({
    host: 'mail.messagingengine.com',
    port: 587,
    secure: false,
    auth: {
      user: 'mail@kura-architects.co.uk',
      pass: process.env.EMAIL_PASS, // store securely in Vercel ENV
    },
  });

  try {
    await transporter.sendMail({
      from: '"Kura Architects Contact Form" <mail@kura-architects.co.uk>',
      to: 'mail@kura-architects.co.uk',
      subject: `New Contact Form Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500 });
  }
}