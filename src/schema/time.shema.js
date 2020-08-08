const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const time = new Schema(
  {
    startTime: {
      type: Date,
      required: true,
    },
    endTime: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

const Time = mongoose.model('times', time);

module.exports = Time;
