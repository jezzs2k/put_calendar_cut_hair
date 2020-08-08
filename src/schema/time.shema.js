const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const time = new Schema(
  {
    startTime: {
      type: Date,
      required: True,
    },
    endTime: {
      type: Date,
      required: True,
    },
  },
  { timestamps: true }
);

const Time = mongoose.model('times', time);

module.exports = Time;
