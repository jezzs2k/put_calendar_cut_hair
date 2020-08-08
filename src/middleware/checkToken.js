const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  try {
    const token = req.headers['auth-token'];

    if (!token) {
      res.status(400).json({ message: 'No Token' });
      return;
    }

    const decoded = jwt.verify(token, process.env.SECRET_JWT);

    req.user = decoded.user;
    next();
  } catch (error) {
    console.log(error.message);
    res.status(401).json({ message: 'Token Invalid!' });
  }
};
