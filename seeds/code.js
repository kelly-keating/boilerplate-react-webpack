
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('code').del()
    .then(function () {
      // Inserts seed entries
      return knex('code').insert([
        {id: 1, text: 'code1', description: 'desc1'},
        {id: 2, text: 'code2', description: 'desc2'},
        {id: 3, text: 'code3', description: 'desc3'}
      ]);
    });
};
