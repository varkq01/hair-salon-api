const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    position: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

var Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = { Employee };
