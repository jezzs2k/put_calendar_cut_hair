const { Register } = require('../model/auth.model');

const Register_Controller = async (req, res) => {
  try {
    const result = await Register(req.body);

    res.status(201).json(result);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'SERVER UNKNOWN' });
  }
};

module.exports = { Register_Controller };
