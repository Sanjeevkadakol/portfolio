import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// Create transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: process.env.SMTP_PORT || 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Verify transporter configuration
if (process.env.SMTP_USER && process.env.SMTP_PASS) {
  transporter.verify((error, success) => {
    if (error) {
      console.log('⚠️ Email service configuration error:', error.message);
      console.log('📧 Email notifications will be disabled. Please check SMTP settings in .env');
    } else {
      console.log('✅ Email service is ready to send messages');
    }
  });
} else {
  console.log('⚠️ SMTP credentials not configured. Email notifications will be disabled.');
  console.log('📧 Please set SMTP_USER and SMTP_PASS in .env file to enable email notifications.');
}

export const sendContactEmail = async (contactData) => {
  // Check if email is configured
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.log('⚠️ Email not configured. Skipping admin notification.');
    return { success: false, error: 'Email service not configured' };
  }

  const { name, email, message, subject } = contactData;
  const adminEmail = process.env.ADMIN_EMAIL || process.env.SMTP_USER;

  const mailOptions = {
    from: `"${name}" <${process.env.SMTP_USER}>`,
    to: adminEmail,
    replyTo: email,
    subject: `Portfolio Contact: ${subject || 'New Inquiry'}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">New Contact Form Submission</h2>
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Subject:</strong> ${subject || 'Portfolio Inquiry'}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
        <p style="color: #666; font-size: 12px;">
          This email was sent from your portfolio contact form.
        </p>
      </div>
    `,
    text: `
      New Contact Form Submission
      
      Name: ${name}
      Email: ${email}
      Subject: ${subject || 'Portfolio Inquiry'}
      
      Message:
      ${message}
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('❌ Error sending email:', error);
    return { success: false, error: error.message };
  }
};

export const sendAutoReply = async (contactData) => {
  // Check if email is configured
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.log('⚠️ Email not configured. Skipping auto-reply.');
    return { success: false, error: 'Email service not configured' };
  }

  const { name, email } = contactData;

  const mailOptions = {
    from: `"Portfolio" <${process.env.SMTP_USER}>`,
    to: email,
    subject: 'Thank you for contacting me!',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">Thank you for reaching out!</h2>
        <p>Hi ${name},</p>
        <p>Thank you for contacting me through my portfolio website. I've received your message and will get back to you as soon as possible.</p>
        <p>Best regards,<br>Portfolio Team</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('❌ Error sending auto-reply:', error);
    return { success: false, error: error.message };
  }
};

