const { Completely } = require('../model/calendar.model');

const Complete_Controller = async (req, res) => {
  try {
    const result = await Completely({ planId: req.params.id });

    res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: COMMON_ERROR.SERVER_UNKNOWN });
  }
};
module.exports = { Complete_Controller };
