exports.up = function (knex, Promise) {
  return knex.schema.createTable('code', function (table) {
    table.increments('id').primary()
    table.string('text')
    table.text('description')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('code')
}
