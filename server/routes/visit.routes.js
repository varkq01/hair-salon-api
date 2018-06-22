const _ = require('lodash');
const { ObjectID } = require('mongodb');
const { Router } = require('express');

var { Visit } = require('./../models/visit');
var { authenticate } = require('./../middleware/authenticate');
const mailer = require('./../mailing/mailer');


module.exports.routes = () => {
  const api = Router();

  api.get('/', authenticate, (req, res) => {
    Visit.find({
      clientMail: req.user.email
    })
      .sort({ date: 'desc' })
      .then(
        visits => {
          res.send({ visits });
        },
        e => {
          res.status(400).send(e);
        }
      );
  });

  api.get('/all', authenticate, (req, res) => {
    if (!req.user.isAdmin) {
      res.status(401).send();
    }

    Visit.find()
      .sort({ date: 'desc' })
      .then(
        visits => {
          res.send({ visits });
        },
        e => {
          res.status(400).send(e);
        }
      );
  });

  api.post('/hours', (req, res) => {
    const body = _.pick(req.body, ['date', 'duration', 'employeeID']);

    Visit.getAvailableHours(body.date, body.duration, body.employeeID)
      .then(days => {
        res.send({ days });
      })
      .catch(e => res.send(e));
  });

  api.post('/', (req, res) => {
    const body = _.pick(req.body, [
      'date',
      'employee',
      'clientMail',
      'services'
    ]);
    const visit = new Visit();
    visit.employee = req.body.employee;
    visit.clientMail = req.body.clientMail;
    visit.date = body.date;
    visit.services = body.services.map(service => {
      return _.pick(service, ['name', 'description', 'price', 'time']);
    });
    visit.price = 0;
    visit.time = 0;

    visit.services.forEach(s => {
      visit.price += s.price;
      visit.time += s.time;
    });


    visit
      .save()
      .then((visit) => {
        mailer.sendVisitCreatedEmail(visit.clientMail, visit.date, visit.employee, visit.services, visit.price);

        res.send({ visit });
      })
      .catch(e => {
        res.status(400).send({ message: 'Błąd przy zapisywaniu wizyty.' });
      });
  });

  api.put('/cancel/:id', authenticate, (req, res) => {
    if (!req.user.isAdmin) {
      res.status(401).send();
    }

    Visit.findByIdAndUpdate(req.params.id, {
       $set: {
         isCancelled: true
       } 
    })
      .then(
        visit => {
          const reason = _.pick(req.body, 'reason').reason;
          mailer.sendCancelledVisitEmail(visit.clientMail, visit.date, reason);
          res.send();
        },
        e => {
          res.status(400).send(e);
        }
      );
  });

  return api;
};
