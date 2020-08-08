const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../schema/auth.schema');

const Register = async ({ userName, email, password }) => {
  try {
    const user = await User.findOne({ email });
    if (user) {
      throw { message: 'User already is exist inside my Store!' };
    }

    const new_user = new User({ userName, email, password });
    new_user.password = await bcrypt.hash(password, 10);
    await new_user.save();

    const payload = {
      user: {
        userId: new_user._id,
        userName,
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

module.exports = { Register, Login };
