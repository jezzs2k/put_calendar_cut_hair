const Time = require('../schema/time.shema');

const Get_Time = async ({ planId }) => {
  try {
      const time = await Time.findOne({ planId });
      
    return { time };
  } catch (error) {
    throw error;
  }
};

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

module.exports = { Get_Time, Set_Time };
