const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const plan = new Schema(
  {
    level: {
      type: Number,
      default: 0,
    },
    isChild: {
      type: Boolean,
      required: true,
    },
    money: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'users',
    },
  },
  { timestamps: true }
);

const Plan = mongoose.model('tests', plan);

module.exports = Plan;
