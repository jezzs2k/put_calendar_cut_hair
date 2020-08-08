const { Set_Calendar } = require('../model/calendar.model');

const COMMON_ERROR = {
  SERVER_UNKNOWN: 'SERVER UNKNOWN',
  NO_PARAMS: 'NO_PARAMS',
};

const Set_Calendar_Controller = async (req, res) => {
  try {
    const result = await Set_Calendar({ ...req.body, userId: req.user.userId });

    res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: COMMON_ERROR.SERVER_UNKNOWN });
  }
};

module.exports = { Set_Calendar_Controller };
