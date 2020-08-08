const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const time = new Schema(
  {
    startTime: {
      type: String,
      required: true,
    },
    minute: {
      type: Number,
      default: 60,
    },
    plan: {
      type: Schema.Types.ObjectId,
      ref: 'Plan',
    },
  },
  { timestamps: true }
);

const Time = mongoose.model('times', time);

module.exports = Time;
