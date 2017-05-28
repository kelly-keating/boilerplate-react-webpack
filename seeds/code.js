
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('code').del()
    .then(function () {
      // Inserts seed entries
      return knex('code').insert([
        {id:8801, text:'git login', description:'will prompt you for your login to github'},
        {id:8802, text:'git clone https://www.github.com/username/repo', description:'get a working copy of a repository'},
        {id:8803, text:'git checkout -b my-branch', description:'create a branch (-b) and move to (checkout) the branch'},
        {id:8804, text:'git branch', description:'will list all the branches that exist on your computer and show you the one you are currently on'},
        {id:8805, text:'git add .', description:'will look for any changes in the files, using the one you are in (.) as a base, and add them to be committed'},
        {id:8806, text:'git commit -m "some meessage"', description:'adds the commit to HEAD but doesn\'t tell github about it yet'},
        {id:8807, text:'git push origin my-branch', description:'sends the changes to github along with a log of the commits'}
      ]);
    });
};
