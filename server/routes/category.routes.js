const _ = require('lodash');
const { ObjectID } = require('mongodb');
const { Router } = require('express');

var { Category } = require('./../models/category');
var { authenticate } = require('./../middleware/authenticate');

module.exports.routes = () => {
  const api = Router();

  api.post('/', authenticate, (req, res) => {
    const category = new Category({
      name: req.body.text,
      _creator: req.user._id,
      services: req.body.services
    });

    category.save().then(
      doc => {
        res.send(doc);
      },
      e => {
        res.status(400).send('Błąd przy zapisywaniu usług.');
      }
    );
  });

  api.get('/', authenticate, (req, res) => {
    Category.find().then(
      categories => {
        res.send({ categories });
      },
      e => {
        res.status(400).send(e);
      }
    );
  });

  api.get('/user/', authenticate, (req, res) => {
    Category.find({
      _creator: req.user._id
    }).then(
      categories => {
        res.send({ categories });
      },
      e => {
        res.status(400).send(e);
      }
    );
  });

  api.get('/user/:id', authenticate, (req, res) => {
    var id = req.params.id;

    if (!ObjectID.isValid(id)) {
      return res.status(404).send();
    }

    Category.findOne({
      _id: id,
      _creator: req.user._id
    })
      .then(category => {
        if (!category) {
          return res.status(404).send();
        }

        res.send({ category });
      })
      .catch(e => {
        res.status(400).send();
      });
  });

  api.delete('/user/:id', authenticate, (req, res) => {
    var id = req.params.id;

    if (!ObjectID.isValid(id)) {
      return res.status(404).send();
    }

    Category.findOneAndRemove({
      _id: id,
      _creator: req.user._id
    })
      .then(category => {
        if (!category) {
          return res.status(404).send();
        }

        res.send({ category });
      })
      .catch(e => {
        res.status(400).send();
      });
  });

  api.patch('/:id', authenticate, (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['name', 'services']);

    if (!ObjectID.isValid(id)) {
      return res.status(404).send();
    }

    Category.findOneAndUpdate(
      { _id: id, _creator: req.user._id },
      { $set: body },
      { new: true }
    )
      .then(category => {
        if (!category) {
          return res.status(404).send();
        }

        res.send({ category });
      })
      .catch(e => {
        res.status(400).send();
      });
  });

  return api;
};
