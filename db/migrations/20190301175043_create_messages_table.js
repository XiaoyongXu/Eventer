exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('messages', function (table) {
      table.increments();
      table.integer('event_id').references('events.id').onDelete('CASCADE');
      table.integer('user_id').references('users.id');
      table.string('contents');
      table.boolean('join_message');
      table.string('url');
      table.timestamp('created_at').defaultTo(knex.fn.now());
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('messages')
  ])
};
