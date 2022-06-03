const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
  console.log(req.headers.authorization);
  console.log(req.headers.authorization.startsWith('Bearer'));

  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];

      jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
      console.error(error);
      return res.status(401).json('Not authorized, token failed.');
    }
  }

  next();
};

module.exports = { protect };
