const express = require('express');

const router = express.Router();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const user = process.env.GMAIL_USER;
const pass = process.env.GMAIL_PASSWORD;

router.use(bodyParser.json()); // support json encoded bodies
router.use(bodyParser.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user,
    pass,
  },
});

const mailOptions = {
  from: user,
  to: user,
  subject: 'Sending Email using Node.js',
  text: '',
};

router.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  mailOptions.text = `Name:${name}\nEmail:${email}\nMessage:${message}`;

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email sent: ${info.response}`);
    }
  });
  res.write('Email sent');
  res.end();
});

module.exports = router;
