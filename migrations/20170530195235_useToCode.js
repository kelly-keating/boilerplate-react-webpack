
exports.up = function (knex, Promise) {
  return knex.schema.createTable('useToCode', function (table) {
    table.increments('id').primary()
    table.integer('code_id')
    table.integer('uses_id')
    table.integer('index')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('useToCode')
}
