
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('topics').del()
    .then(function () {
      // Inserts seed entries
      return knex('topics').insert([
        {id:9901, name:'cmdLine', description:'i am neo'},
        {id:9902, name:'git', description:'the shiz'},
        {id:9903, name:'heroku', description:'tis I'}
      ]);
    });
};
