const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: process.env.MYSQL_USER,
      port: 3306,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE
    },
    migrations: {
      directory: __dirname + '/knex/migrations'
    },
    seeds: {
      directory: __dirname + '/knex/seeds'
    }
  }
};
