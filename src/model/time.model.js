const Time = require('../schema/time.shema');

const Set_Time = async ({ startTime, endTime }) => {
  try {
    const time = new Time({ startTime, endTime });

    (async function () {
      await time.save();
    })();

    return { time };
  } catch (error) {
    throw error;
  }
};

module.exports = { Set_Time };
