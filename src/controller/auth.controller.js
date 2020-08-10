const { Register, Login } = require('../model/auth.model');

const COMMON_ERROR = {
  SERVER_UNKNOWN: 'SERVER UNKNOWN',
  NO_PARAMS: 'NO_PARAMS',
};

const Register_Controller = async (req, res) => {
  try {
    const result = await Register(req.body);

    res.status(201).json(result);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: COMMON_ERROR.SERVER_UNKNOWN });
  }
};

const Login_Controller = async (req, res) => {
  try {
    const result = await Login(req.body);

    res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: COMMON_ERROR.SERVER_UNKNOWN });
  }
};

module.exports = { Login_Controller, Register_Controller };
