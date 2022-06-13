const jwt = require('jsonwebtoken');
const knex = require('../../knex/knex.js');

// Authenticate token to access private routes
const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      const user = await knex('users').where({ id: decoded.id }).first();

      if (!user) {
        return res.status(400).json('Account does not exist.');
      }

      req.userId = user.id;
    } catch (error) {
      console.error(error);
      return res.status(401).json('Not authorized, token failed.');
    }
  }

  if (!token) {
    res.status(400).json('Not authorized, no token.');
  }

  next();
};

module.exports = { protect };
