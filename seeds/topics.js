
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('topics').del()
    .then(function () {
      // Inserts seed entries
      return knex('topics').insert([
        {id: 1, name: 'rowValue1', description: '1st'},
        {id: 2, name: 'rowValue2', description: '2nd'},
        {id: 3, name: 'rowValue3', description: '3rd'}
      ]);
    });
};
