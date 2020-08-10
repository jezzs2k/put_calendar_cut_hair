const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const test = new Schema(
  {
    test: Boolean,
    name: String,
  },
  { timestamps: true }
);

const Test = mongoose.model('tests', test);

module.exports = Test;
