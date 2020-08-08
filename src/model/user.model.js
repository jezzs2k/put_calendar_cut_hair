const User = require('../schema/auth.schema');

const Get_User = async ({ id, email }) => {
  try {
    let user;
    if (id) user = await User.findById(id);
    if (!id && email) user = await User.findOne({ email });

    if (!user) throw { message: "User don't exists in store!!" };

    return { user };
  } catch (error) {
    throw error;
  }
};

module.exports = { Get_User };
