exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', function (table) {
      table.increments();
      table.string('email');
      table.string('first_name');
      table.string('last_name');
      table.boolean('isAdmin');
      table.string('password');
      table.string('googleid');
      table.string('url');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users')
  ])
};
