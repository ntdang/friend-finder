var friends = require('../data/friends');

module.exports = function(app) {

  // Get ALL friends
  app.get('/api/friends', function(req, res) {
  
    return res.json(friends);

  });

  // POST a new friend
  app.post('/api/friends', function(req, res) {

    var newFriend = req.body;

    console.log(newFriend);

    friends.push(newFriend);

    res.json(newFriend);

  });
};