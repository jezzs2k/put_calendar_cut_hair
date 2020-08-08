const Time = require('../schema/time.shema');

const Get_Time = async ({ planId }) => {
  try {
    const time = await Time.findOne({ planId });

    return { time };
  } catch (error) {
    throw error;
  }
};

module.exports = { Get_Time };
