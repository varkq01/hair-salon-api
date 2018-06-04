const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },

  _creator: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },

  services: [
    {
      name: {
        type: String,
        required: true
      },
      description: {
        type: String
      },
      type: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      },
      time: {
        type: Number,
        required: true
      },
      _creator: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
      }
    }
  ]
});

const Category = mongoose.model('Category', CategorySchema);

module.exports = { Category };
