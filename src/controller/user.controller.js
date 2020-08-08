const { Delete_User } = require('../model/user.model');

const COMMON_ERROR = {
  SERVER_UNKNOWN: 'SERVER UNKNOWN',
  NO_PARAMS: 'NO_PARAMS',
};

const Delete_User_Controller = async (req, res) => {
  try {
    const result = await Delete_User({ id: req.params.id });

    res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: COMMON_ERROR.SERVER_UNKNOWN });
  }
};

module.exports = { Delete_User_Controller };
