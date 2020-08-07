const Test = require('../schema/test.schema');

const get_something = async (name) => {
  try {
    const data = { name, test: true };

    const test = new Test(data);
    await test.save();

    return await Test.find();
  } catch (error) {
    throw error;
  }
};

module.exports = { get_something };
