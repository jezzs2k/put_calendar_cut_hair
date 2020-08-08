const {} = require('../model/time.model');

const COMMON_ERROR = {
  SERVER_UNKNOWN: 'SERVER UNKNOWN',
  NO_PARAMS: 'NO_PARAMS',
};

const Set_Time_Controller = async () => {
  try {
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: COMMON_ERROR.SERVER_UNKNOWN });
  }
};

module.exports = { Set_Time_Controller };
