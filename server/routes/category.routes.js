const _ = require('lodash');
const { ObjectID } = require('mongodb');
const { Router } = require('express');

var { Category } = require('./../models/category');
var { authenticate } = require('./../middleware/authenticate');

module.exports.routes = () => {
  const api = Router();

  api.get('/', (req, res) => {
    Category.find().then(
      categories => {
        res.send({ categories });
      },
      e => {
        res.status(400).send(e);
      }
    );
  });

  api.post('/', authenticate, (req, res) => {
    const body = _.pick(req.body, ['name', 'type', 'services']);
    const category = new Category({
      name: body.name,
      services: body.services,
      type: body.type,
      _creator: req.user._id
    });

    category
      .save()
      .then(() => {
        res.send({ category });
      })
      .catch(e => {
        res.status(400).send(e);
      });
  });

  api.put('/:id', authenticate, (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['name', 'type', 'services']);

    if (!ObjectID.isValid(id)) {
      return res.status(404).send();
    }

    Category.findOneAndUpdate({ _id: id }, { $set: body }, { new: true })
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

  api.delete('/:id', authenticate, (req, res) => {
    if (!req.user.isAdmin) {
      return res.status(401).send();
    }

    Category.findByIdAndRemove(req.params.id).then(
      category => {
        res.send();
      },
      e => {
        res.status(400).send(e);
      }
    );
  });

  return api;
};
