const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../schema/auth.schema');

const Login = async ({ email, password }) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("User already isn't exists!");
    }

    const match = await bcrypt.compare(password, user.password);
    if (match) {
      throw new Error("Password don't correct!");
    }

    const payload = {
      user: {
        userId: user._id,
        userName: user.userName,
      },
    };
    const token = jwt.sign(payload, process.env.SECRET_JWT, {
      expiresIn: 1000 * 60 * 60 * 24,
    });

    return { token };
  } catch (error) {
    throw error;
  }
};

module.exports = { Login };
