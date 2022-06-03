const knex = require('../../knex/knex.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const registerUser = (req, res, next) => {
  const { username, email, password, confirmPassword } = req.body;

  console.log('USERNAME: ' + username);
  console.log('EMAIL: ' + email);
  console.log('PASSWORD: ' + password);
  console.log('CONFIRM: ' + confirmPassword);

  if (!username) {
    res.status(400).send('Username cannot be empty.');
    return;
  }

  if (!email) {
    res.status(400).send('Email cannot be empty.');
    return;
  }

  if (!password) {
    res.status(400).send('Password cannot be empty.');
    return;
  }

  if (confirmPassword !== password) {
    res.status(400).send('Passwords do not match.');
    return;
  }

  knex('users')
    .where('email', email)
    .first()
    .then((row) => {
      console.log(row);

      if (row) {
        return res.status(400).json('User already exists.');
      }

      bcrypt.genSalt(10, (err, salt) => {
        if (err) {
          next(err);
        }

        bcrypt.hash(password, salt, (err, hash) => {
          if (err) {
            next(err);
          }

          knex('users')
            .insert({
              username,
              email,
              password: hash
            })
            .then((response) => {
              console.log('bcrypt hash res: ' + response);

              res.status(200).json('Successful registration');
            })
            .catch((err) => {
              console.error('bcrypt hash error: ' + err);

              next(err);
            });
        });
      });
    });
};

const loginUser = (req, res, next) => {
  const { email, password } = req.body;

  knex('users')
    .where({
      email: email
    })
    .first()
    .then((row) => {
      console.log(row);

      if (!row) {
        return res.status(400).json('Account does not exist.');
      }

      bcrypt.compare(password, row.password, (err, response) => {
        if (err) {
          return res.status(500).json('Something went wrong.');
        }

        if (!response) {
          return res.status(400).json('Email or password is incorrect.');
        }

        const token = jwt.sign({ id: row.id }, 'SECRET_TOKEN_KEY', {
          expiresIn: '2h'
        });

        return res.status(200).json({
          id: row.id,
          username: row.username,
          email: row.email,
          token
        });
      });
    });
};

const getUserDashboard = (req, res, next) => {
  const id = req.params.id;

  console.log('getUserDashboard id: ' + id);

  return res.status(200).json('Successful dashboard');
};

module.exports = { registerUser, loginUser, getUserDashboard };
