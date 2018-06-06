const _ = require('lodash');
const { Router } = require('express');
const { ObjectID } = require('mongodb');

const { User } = require('./../models/user');
const { authenticate } = require('./../middleware/authenticate');
const mailer = require('./../mailing/mailer');

module.exports.routes = () => {
  const api = Router();

  /**
   * REGISTER
   */
  api.post('/', (req, res) => {
    var body = _.pick(req.body, ['email', 'password', 'firstName', 'lastName']);
    var user = new User(body);

    user
      .save()
      .then(() => {
        return user.generateAuthToken().then(token => {
          res.header('x-auth', token).send(user);
        });
      })
      .catch(e => {
        if (e.code == 11000) {
          return res.status(400).send({
            message: 'Istnieje już użytkownik z podanym adresem e-mail.'
          });
        }
        res.status(400).send({ message: 'Błąd przy tworzeniu użytkownika.' });
      });
  });

  /**
   * FORGOT PASSWORD
   */
  api.post('/reset', (req, res) => {
    var body = _.pick(req.body, ['email']);

    User.findOne({
      email: body.email
    })
      .then(user => {
        if (!user) {
          return res.send(); //do not send error
        }

        const pass = user.getResetPassword().then(pass => {
          const password = pass;
          user.password = password;

          user.save().then(() => {

            mailer.sendResetPasswordEmail(user.email, password);
            res.send();
          });
        });
      })
      .catch(e => res.status(400).send(e));
  });

  /**
   * LOGIN
   */
  api.post('/login', (req, res) => {
    var body = _.pick(req.body, ['email', 'password']);

    User.findByCredentials(body.email, body.password)
      .then(user => {
        return user.generateAuthToken().then(token => {
          res.header('x-auth', token).send(user);
        });
      })
      .catch(e => {
        res.status(400).send({ message: e });
      });
  });

  /**
   * LOGOUT
   */
  api.delete('/logout', authenticate, (req, res) => {
    req.user.removeToken(req.token).then(
      () => {
        res.status(200).send();
      },
      e => {
        res.status(400).send({ message: e });
      }
    );
  });
  return api;
};
