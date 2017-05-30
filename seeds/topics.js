
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('topics').del()
    .then(function () {
      // Inserts seed entries
      return knex('topics').insert([
        {id: 9901, name: 'cmdLine', alias: 'Command Line', description: 'Command Line code for Linux machines.'},
        {id: 9902, name: 'git', alias: 'git', description: 'the shiz'},
        {id: 9903, name: 'js', alias: 'JavaScript', description: 'magic'},
        {id: 9904, name: 'heroku', alias: 'Heroku', description: 'tis I'},
        {id: 9905, name: 'react', alias: 'React', description: 'invisible magic'},
        {id: 9909, name: 'npm', alias: 'Packages', description: 'bundles of joy'}
      ])
    })
}
