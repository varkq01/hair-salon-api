const _ = require('lodash');
const { ObjectID } = require('mongodb');
const { Router } = require('express');

var { Visit } = require('./../models/visit');
var { authenticate } = require('./../middleware/authenticate');

module.exports.routes = () => {
  const api = Router();

  api.get('/', authenticate, (req, res) => {
    Visit.find({
      clientMail: req.user.email
    }).then(
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
    var body = _.pick(req.body, ['services', 'employee', 'clientMail', 'date']);
    var visit = new Visit(body);
    visit.price = body.services.reduce((a, b) => a.price + b.price);

    visit
      .save()
      .then(() => {
        res.send({ visit });
      })
      .catch(e => {
        res.status(400).send({ message: 'Błąd przy zapisywaniu wizyty.' });
      });
  });

  return api;
};
