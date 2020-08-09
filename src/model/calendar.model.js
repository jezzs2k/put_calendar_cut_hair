const Calendar = require('../schema/calendar.schema');

const Get_Calendar = async () => {
  try {
    const calendars = await Calendar.find().populate(['user', 'time']);

    return { calendars: [...calendars] };
  } catch (error) {
    throw error;
  }
};

module.exports = { Get_Calendar };
