const Plan = require('../schema/calendar.schema');
const Time = require('../schema/time.shema');

const Set_Calendar = async ({
  level,
  isChild,
  money,
  userId,
  startTime,
  minute,
}) => {
  try {
    const calendar = await Plan.findOne({ user: userId });

    if (calendar) {
      throw { message: 'Just one plan once day!' };
    }

    const time = new Time({ startTime, minute });
    const new_calendar = new Plan({
      level,
      isChild,
      money,
      user: userId,
      time: time._id,
    });

    (async function () {
      await new_calendar.save();
      await time.save();
    })();

    return { calendar: new_calendar };
  } catch (error) {
    throw error;
  }
};

module.exports = { Set_Calendar };
