const Time = require('../schema/time.shema');

const Delete_Time = async ({ planId }) => {
  try {
    const time = await Time.findOneAndDelete({ plan: planId });

    return { time };
  } catch (error) {
    throw error;
  }
};

module.exports = { Delete_Time };
