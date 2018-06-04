const _ = require('lodash');
const { Router } = require('express');
const { ObjectID } = require('mongodb');


var { User } = require('./../models/user');
var { authenticate } = require('./../middleware/authenticate');

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
      // .then(() => {
      //   return user.generateAuthToken();
      // })
      // .then(token => {
      //   res.header('x-auth', token).send(user);
      // })
      .then( ()=> {
        res.status(200).send();
      })
      .catch(e => {
        res.status(400).send(e);
      });
  });

  /**
   * FORGOT PASSWORD
   */
  api.post('/reset', (req, res) => {
    var body = _.pick(req.body, ['email']);

    User.findOne({
      email: body.email
    }).then(user => {
        if (!user) {
          return res.send(); //do not send error
        }

        //TODO update

        //user exists - send email
        //TODO send email

        res.send({message: 'Hasło zostało zresetowane!'});
      })
      .catch(e => res.status(400).send());
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
        res.status(400).send();
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
      () => {
        res.status(400).send();
      }
    );
  });
  return api;
};
