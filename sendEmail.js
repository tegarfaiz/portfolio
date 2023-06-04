const nodemailer = require('nodemailer');

async function sendEmail() {
  try {
    const transporter = nodemailer.createTransport({
      service: 'SMTP',
      auth: {
        user: process.env.FROM_EMAIL,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    const mailOptions = {
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      subject: 'New Form Submission',
      text: 'You have received a new form submission.'
    };

    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

sendEmail();
