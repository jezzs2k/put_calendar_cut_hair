const { Get_Calendar } = require('../model/calendar.model');

const COMMON_ERROR = {
  SERVER_UNKNOWN: 'SERVER UNKNOWN',
  NO_PARAMS: 'NO_PARAMS',
};

const Get_Calendar_Controller = async (req, res) => {
  try {
    const result = await Get_Calendar();

    res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: COMMON_ERROR.SERVER_UNKNOWN });
  }
};
module.exports = { Get_Calendar_Controller };
