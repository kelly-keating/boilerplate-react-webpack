
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('code').del()
    .then(function () {
      // Inserts seed entries
      return knex('code').insert([
        {id:88201, topic_id:9902, text:'git login', description:'Will prompt you for your login to github.'},
        {id:88202, topic_id:9902, text:'git clone https://www.github.com/username/repo', description:'Get a working copy of a repository on your computer.'},
        {id:88203, topic_id:9902, text:'git checkout -b my-branch', description:'Create a branch (-b) and move to the branch.'},
        {id:88204, topic_id:9902, text:'git branch', description:'Will list all the branches that exist on your computer and show you the one you are currently on.'},
        {id:88205, topic_id:9902, text:'git add .', description:'Will look for any changes in the files, using the one you are in (.) as a base, and add them to be committed.'},
        {id:88206, topic_id:9902, text:'git commit -m "some message"', description:'Adds the commit to HEAD but doesn\'t tell github about it yet.'},
        {id:88207, topic_id:9902, text:'git push origin my-branch', description:'Sends the changes to github along with a log of the commits.'},
        {id:88208, topic_id:9902, text:'git fetch origin', description:'Refreshes your branches from origin.'},
        {id:88209, topic_id:9902, text:'git branch -a', description:'Finds all available branches (including from other people).'},
        {id:88210, topic_id:9902, text:'git pull origin my-branch', description:''},
        {id:88211, topic_id:9902, text:'git log', description:'Shows a log of commits made.'},
        {id:88212, topic_id:9902, text:'git log -p', description:'Shows a log of commits made, plus details of what changed in the files.'},
        {id:88213, topic_id:9902, text:'git checkout HEAD~1', description:'Moves to the previous commit on your branch. Changing the number will dictate how far back you go (ie. HEAD~5 will go back 5 commits).'}
      ]);
    });
};
