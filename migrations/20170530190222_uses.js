
exports.up = function (knex, Promise) {
  return knex.schema.createTable('uses', function (table) {
    table.increments('id').primary()
    table.text('question')
    table.text('description')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('uses')
}
