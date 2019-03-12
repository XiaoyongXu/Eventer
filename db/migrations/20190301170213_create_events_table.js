
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('events', function (table) {
      table.increments();
      table.string('title');
      table.string('description');
      table.string('weather');
      table.string('location');
      table.string('url');
      table.string('lat');
      table.string('lng');
      table.string('start_date');
      table.string('end_date');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('events')
  ])
};
