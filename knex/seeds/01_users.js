exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          username: 'test',
          email: 'test@test.com',
          password:
            '$2a$10$GgOE8Vxsxx/MlS6/yqJa6upPdDhyQk3s0VqhiqjMuwOHOrD/ict1C' // test
        }
      ]);
    });
};
