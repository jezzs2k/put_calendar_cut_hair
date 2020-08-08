const User = require('../schema/auth.schema');

const Delete_User = async ({ id }) => {
  try {
    const user = await User.findById(id);

    if (!user) {
      throw { message: "User don't exists !" };
    }

    (async function () {
      await User.deleteOne(user);
    })();

    return { user };
  } catch (error) {
    throw error;
  }
};

module.exports = { Delete_User };
