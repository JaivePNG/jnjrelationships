exports.up = function (knex, Promise) {
  return knex.schema.createTable('profiles', function (table) {
    table.increments('id').primary()
    table.string('name')
    table.string('email')
    table.string('url')
    table.integer('user_id').references('user.id')
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('profiles')
};
