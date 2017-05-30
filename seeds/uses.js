exports.seed = function (knex, Promise) {
  return knex('uses').del()
    .then(function () {
      return knex('uses').insert([
        {id:3301, question:'How do I make a branch and commit to that branch?', description:'chat chat chat', topic_id:9902}
      ])
    })
  }
