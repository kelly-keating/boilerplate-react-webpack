exports.seed = function (knex, Promise) {
  return knex('useToCode').del()
    .then(function () {
      return knex('useToCode').insert([
        {id:55001, code_id:88203, uses_id:3301, index:0},
        {id:55002, code_id:88206, uses_id:3301, index:1},
        {id:55003, code_id:88207, uses_id:3301, index:2},
        {id:55004, code_id:88209, uses_id:3301, index:3}
      ])
    })
  }
