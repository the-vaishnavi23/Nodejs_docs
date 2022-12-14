var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vaishnavisri142001@gmail.com',
    pass: 'Lucky@123',
  },
});

var mailOptions = {
  from: 'vaishnavisri142001@gmail.com',
  to: 'theworkvaishnavi@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!',
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
