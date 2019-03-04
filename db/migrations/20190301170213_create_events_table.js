
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('events', function (table) {
      table.increments();
      table.string('title');
      table.integer('user_id').references('users.id');
      table.string('description');
      table.timestamp('start_date');
      table.timestamp('end_date');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('events')
  ])
};
