exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          username: 'test1',
          email: 'test1@email.com',
          password:
            '$2a$10$GgOE8Vxsxx/MlS6/yqJa6upPdDhyQk3s0VqhiqjMuwOHOrD/ict1C' // test
        },
        {
          id: 2,
          username: 'test2',
          email: 'test2@email.com',
          password:
            '$2a$10$GgOE8Vxsxx/MlS6/yqJa6upPdDhyQk3s0VqhiqjMuwOHOrD/ict1C' // test
        },
        {
          id: 3,
          username: 'test3',
          email: 'test3@email.com',
          password:
            '$2a$10$GgOE8Vxsxx/MlS6/yqJa6upPdDhyQk3s0VqhiqjMuwOHOrD/ict1C' // test
        }
      ]);
    });
};
