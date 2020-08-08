const { Delete_User, Get_User } = require('../model/user.model');

const COMMON_ERROR = {
  SERVER_UNKNOWN: 'SERVER UNKNOWN',
  NO_PARAMS: 'NO_PARAMS',
  PARAMS_WRONG: 'PARAMS_WRONG',
};

const Delete_User_Controller = async (req, res) => {
  try {
    if (req.user.userId !== req.params.id) {
      res.status(400).json({ message: COMMON_ERROR.PARAMS_WRONG });
      return;
    }
    const result = await Delete_User({ id: req.params.id });

    res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: COMMON_ERROR.SERVER_UNKNOWN });
  }
};

const Get_User_Controller = async (req, res) => {
  try {
    let data = {};

    data = req.query.id
      ? { ...data, id: req.query.id }
      : { ...data, email: req.query.email };

    if (!('id' in data) && !('email' in data)) {
      res.status(400).json({ message: COMMON_ERROR.NO_PARAMS });
      return;
    }

    const result = await Get_User(data);

    res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: COMMON_ERROR.SERVER_UNKNOWN });
  }
};

module.exports = { Delete_User_Controller, Get_User_Controller };
