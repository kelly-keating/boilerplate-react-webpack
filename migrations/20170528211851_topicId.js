
exports.up = function(knex, Promise) {
  return knex.schema.table('code', function (table) {
    table.integer('topic_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('code', function (table) {
    table.dropColumn('topic_id')
  })
};
