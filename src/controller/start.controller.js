const { get_something } = require('../model/start.model');

const get_something_controller = async (req, res) => {
  try {
    const result = await get_something('hieu');

    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

module.exports = { get_something_controller };
