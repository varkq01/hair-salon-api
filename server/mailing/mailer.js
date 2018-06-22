const nodemailer = require('nodemailer');

const moment = require('moment');

const transporter = nodemailer.createTransport({
  auth: {
    user: process.env.MAIL_USER, // generated ethereal user
    pass: process.env.MAIL_PASS // generated ethereal password
  },
  service: 'gmail'
});

const sendResetPasswordEmail = (userMail, password) => {
  const mailOptions = {
    from: '"Hair Studio" <varkq01@gmail.com>',
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

const sendVisitCreatedEmail = (userMail, date, employee, services, price) => {
  let servicesString = '';
  
  services.forEach(s => {
    servicesString += `<li>${s.name}</li>`;
  });

  const mailOptions = {
    from: '"Hair Studio" <varkq01@gmail.com>',
    to: userMail,
    subject: 'Nowa wizyta ' + moment(date).format('DD-MM-YYYY HH:mm'),
    html: `
    <h2>Zarejestrowano nową wizytę</h2>
    <p>Termin: ${moment(date).format('DD-MM-YYYY HH:mm')}</p>
    <p>Całkowity koszt: ${price}zł</p>
    <p>Fryzjer: ${employee.firstName} ${employee.lastName}</p>
    <p>Lista usług:</p>    
    <ul>${servicesString}</ul>
    `
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      return console.log(err);
    }
    console.log('Message sent with success');
  });
};

const sendCancelledVisitEmail = (userMail, date, reason) => {
  const mailOptions = {
    from: '"Hair Studio" <varkq01@gmail.com>',
    to: userMail,
    subject: 'Anulowanie wizyty ' + moment(date).format('DD-MM-YYYY HH:mm'),
    html: `
    <p>Z przykrością informujemy, że wizyta dnia ${moment(date).format('DD-MM-YYYY HH:mm')} została odwołana.</p>
    <p>Powód odwołania wizyty:</p>
    <p>${reason}</p>
    <p>W celu poznania szczegółów prosimy o kontakt mailowy lub telefoniczny.</p>
    <ul>
      <li> +48 123 456 789
      </li>
      <li>
        <a class="text-success" href="mailto:kontakt@hairsalon.com">kontakt@hairsalon.com</a>
      </li>
    </ul>
    `
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
  sendContactEmail,
  sendVisitCreatedEmail,
  sendCancelledVisitEmail,
};
