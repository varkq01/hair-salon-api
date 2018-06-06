const _ = require('lodash');
const { Router } = require('express');
const mailer = require('./../mailing/mailer');

module.exports.routes = () => {
  const api = Router();

  api.post('/', (req, res) => {
    const body = _.pick(req.body, [
      'firstName',
      'lastName',
      'email',
      'message'
    ]);
    try {
      mailer.sendContactEmail(
        body.email,
        body.firstName,
        body.lastName,
        body.message
      );
      res.send();
    } catch (e) {
      res.status(400).send();
    }
  });

  return api;
};
