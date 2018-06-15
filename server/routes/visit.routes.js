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
    const body = _.pick(req.body, ['date', 'employee', 'clientMail', 'services']);
    const visit = new Visit();
    visit.employee = req.body.employee;
    visit.clientMail = req.body.clientMail
    visit.date = body.date;
    visit.services = body.services.map(service => {
      return _.pick(service, ['name', 'description', 'price', 'time']);
    })
    visit.price = visit.services.reduce((a, b) => a.price + b.price);
    visit.time = visit.services.reduce((a,b) => a.time + b.time);

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
