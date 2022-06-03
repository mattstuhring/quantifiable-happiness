const knex = require('../../knex/knex.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res, next) => {
  const { username, email, password, confirmPassword } = req.body;

  console.log('USERNAME: ' + username);
  console.log('EMAIL: ' + email);
  console.log('PASSWORD: ' + password);
  console.log('CONFIRM: ' + confirmPassword);

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
    console.log(user);

    if (user) {
      return res.status(400).json('User already exists.');
    }

    const hash = await bcrypt.hash(password, 10);

    const userId = knex('users').insert({ username, email, password: hash }, [
      'id'
    ]);

    if (!userId) {
      return res.status(400).json('User failed to be created');
    }

    res.status(200).json('User successfully registered');
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await knex('users').where({ email }).first();
    console.log(user);

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
      id: user.id,
      username: user.username,
      email: user.email,
      token
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const getUserDashboard = (req, res, next) => {
  const id = req.params.id;

  console.log('getUserDashboard id: ' + id);

  return res.status(200).json('Successful dashboard');
};

module.exports = { registerUser, loginUser, getUserDashboard };
