
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('events', function (table) {
      table.increments();
      table.string('title');
      table.integer('user_id').references('users.id');
      table.string('description');
      table.date('start_date');
      table.date('end_date');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('events')
  ])
};
