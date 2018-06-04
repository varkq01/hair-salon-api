const mongoose = require('mongoose');

const VisitSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
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
        price: {
          type: Number,
          required: true
        },
      }
    ],
    price: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Visit = mongoose.model('Visit', VisitSchema);

module.exports = { Visit };
