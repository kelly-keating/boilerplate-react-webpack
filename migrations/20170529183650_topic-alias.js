
exports.up = function(knex, Promise) {
  return knex.schema.table('topics', function (table) {
    table.string('alias')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('topics', function (table) {
    table.dropColumn('alias')
  })
};
