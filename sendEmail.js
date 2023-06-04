var nodemailer = require('nodemailer');

// Ambil informasi pengiriman email dari environment variables
var toEmail = process.env.TO_EMAIL;
var fromEmail = process.env.FROM_EMAIL;
var emailPassword = process.env.EMAIL_PASSWORD;

// Konfigurasi transporter Nodemailer
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'autoemailtegar@gmail.com',
    pass: 'polisi123',
  },
});

// Definisikan options email
var mailOptions = {
  from: 'autoemailtegar@gmail.com',
  to: 'tegar.faiz.21@gmail.com',
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
