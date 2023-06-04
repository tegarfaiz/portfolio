const nodemailer = require('nodemailer');

// Ambil informasi pengiriman email dari environment variables
const toEmail = process.env.TO_EMAIL;
const fromEmail = process.env.FROM_EMAIL;
const emailPassword = process.env.EMAIL_PASSWORD;

// Konfigurasi transporter Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: fromEmail,
    pass: emailPassword,
  },
});

// Definisikan options email
const mailOptions = {
  from: fromEmail,
  to: toEmail,
  subject: 'Pesan dari Form Kontak',
  text: 'Ini adalah pesan yang dikirim dari formulir kontak.',
};

// Kirim email
transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email terkirim: ' + info.response);
  }
});
