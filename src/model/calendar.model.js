const Plan = require('../schema/calendar.schema');
const Time = require('../schema/time.shema');

const Completely = async ({ planId }) => {
  try {
    const plan = await Plan.findById(planId);

    if (!plan) {
      throw { message: 'PlanId invalid?' };
    }

    (async function () {
      await Time.findByIdAndDelete(plan.time);
      await Plan.deleteOne(plan);
    })();

    return { plan };
  } catch (error) {
    throw error;
  }
};

module.exports = { Completely };
