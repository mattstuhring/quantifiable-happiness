const knex = require('../../knex/knex.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// @desc    Register a new user
// @route   POST /api/v1/users
// @access  Public
const registerUser = async (req, res, next) => {
  const { username, email, password, confirmPassword } = req.body;

  if (!username) {
    return res.status(400).send('Username cannot be empty.');
  }

  if (!email) {
    return res.status(400).send('Email cannot be empty.');
  }

  if (!password) {
    return res.status(400).send('Password cannot be empty.');
  }

  if (confirmPassword !== password) {
    return res.status(400).send('Passwords do not match.');
  }

  try {
    const user = await knex('users').where({ email }).first();

    if (user) {
      return res.status(400).json('User already exists.');
    }

    const hash = await bcrypt.hash(password, 10);

    const userId = await knex('users').insert(
      { username, email, password: hash },
      ['id']
    );

    if (!userId) {
      return res.status(400).json('User failed to be created');
    }

    res.status(200).json('User successfully registered');
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// @desc    Authenticate user & get token
// @route   POST /api/v1/users/login
// @access  Public
const loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await knex('users').where({ email }).first();

    if (!user) {
      return res.status(400).json('Account does not exist.');
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(400).json('Email or password is incorrect.');
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: '2h'
    });

    return res.status(200).json({
      username: user.username,
      token
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = { registerUser, loginUser };
