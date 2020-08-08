const Time = require('../schema/time.shema');

const Set_Time = async ({ startTime, endTime, planId }) => {
  try {
    const time = new Time({ startTime, endTime, plan: planId });

    (async function () {
      await time.save();
    })();

    return { time };
  } catch (error) {
    throw error;
  }
};

module.exports = { Set_Time };
