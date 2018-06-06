const _ = require('lodash');

const { Employee } = require('./../models/employee');
const { authenticate } = require('./../middleware/authenticate');
const { Router } = require('express');

module.exports.routes = () => {
  const api = Router();
  api.post('/', authenticate, (req, res) => {
    var body = _.pick(req.body, [
      'file',
      'description',
      'firstName',
      'lastName',
      'position'
    ]);

    if(!req.user.isAdmin) {
      return res.status(401).send();
    }

    var employee = new Employee({ 
      image: body.file,
      firstName: body.firstName,
      lastName: body.lastName,
      position: body.position,
      description: body.description
     });

    employee.save().then(
      emp => {
        res.send({ employee: emp });
      },
      e => {
        res.status(400).send(e);
      }
    );
  });

  api.get('/', (req, res) => {
    Employee.find().then(
      employees => {
        res.send({ employees });
      },
      e => {
        res.status(400).send(e);
      }
    );
  });

  return api;
};
