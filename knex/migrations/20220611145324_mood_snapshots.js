exports.up = async function (knex, Promise) {
  await knex.schema.createTable('mood_snapshots', (table) => {
    table.increments('id').unsigned().primary();
    table.string('mood').notNullable();
    table.string('location').notNullable();
    table.string('people').notNullable();
    table.string('notes', 500).defaultTo('');
    table
      .integer('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = async function (knex, Promise) {
  await knex.schema.dropTable('mood_snapshots');
};
