exports.up = async function (knex, Promise) {
  await knex.schema.createTable('users', (table) => {
    table.increments('id').unsigned().primary();
    table.string('username').notNullable();
    table.string('email').unique().notNullable();
    table.string('password').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = async function (knex, Promise) {
  await knex.schema.dropTable('users');
};
