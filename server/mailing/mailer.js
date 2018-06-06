const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  auth: {
    user: process.env.MAIL_USER, // generated ethereal user
    pass: process.env.MAIL_PASS // generated ethereal password
  },
  service: 'gmail'
});

const sendResetPasswordEmail = (userMail, password) => {
  const mailOptions = {
    from: '"Hair Studio" <foo@example.com>',
    to: userMail,
    subject: 'Twoje hasło zostało zresetowane!',
    text: `Twoje nowe hasło do naszej strony to: ${password}`,
    html: `<p>Twoje nowe hasło do naszej strony to: ${password}</p>`
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      return console.log(err);
    }
    console.log('Message sent with success');
  });
};

const sendContactEmail = (mail, firstName, lastName, message) => {
  console.log(mail);
  const mailOptions = {
    from: `"${firstName} ${lastName}`,
    to: process.env.MAIL_USER,
    subject: `Wiadomość od klienta: ${lastName} ${firstName}`,
    text: `Wiadomość od ${firstName} ${lastName} ${mail}:
    ${message}`,
    html: `
    <p>Wiadomość od ${firstName} ${lastName} ${mail}:</p>
    <p>${message}</p>`
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      return console.log(err);
    }
    console.log('Message sent with success');
  });
};

module.exports = {
  sendResetPasswordEmail,
  sendContactEmail
};
