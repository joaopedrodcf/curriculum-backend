var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var nodemailer = require("nodemailer");
require("dotenv").config();

router.use(
  bodyParser.urlencoded({
    extended: true
  })
);

router.post("/send-email/", function(req, res) {
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
  res.write("Email sent");
  res.end();
});

module.exports = router;

const user = process.env.GMAIL_USER;
const pass = process.env.GMAIL_PASSWORD;

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: user,
    pass: pass
  }
});

var mailOptions = {
  from: user,
  to: user,
  subject: "Sending Email using Node.js",
  text: "That was easy!"
};
