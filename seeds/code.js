
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('code').del()
    .then(function () {
      // Inserts seed entries
      return knex('code').insert([
        {id:8801, topic_id:9902, text:'git login', description:'will prompt you for your login to github'},
        {id:8802, topic_id:9902, text:'git clone https://www.github.com/username/repo', description:'get a working copy of a repository'},
        {id:8803, topic_id:9902, text:'git checkout -b my-branch', description:'create a branch (-b) and move to (checkout) the branch'},
        {id:8804, topic_id:9902, text:'git branch', description:'will list all the branches that exist on your computer and show you the one you are currently on'},
        {id:8805, topic_id:9902, text:'git add .', description:'will look for any changes in the files, using the one you are in (.) as a base, and add them to be committed'},
        {id:8806, topic_id:9902, text:'git commit -m "some message"', description:'adds the commit to HEAD but doesn\'t tell github about it yet'},
        {id:8807, topic_id:9902, text:'git push origin my-branch', description:'sends the changes to github along with a log of the commits'},
        {id:8808, topic_id:9901, text:'cmd command', description:'here lies description'},
        {id:8809, topic_id:9903, text:'heroku stuff', description:'description of stuff'}
      ]);
    });
};
