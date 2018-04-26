var friends = require('../data/friends');

module.exports = function(app) {
  // Get ALL friends
  app.get('/api/friends', function(req, res) {
    return res.json(friends);
  });

  // POST a new friend
  app.post('/api/friends', function(req, res) {
    var newFriend = req.body;
    var newFriendName = req.body.name;
    var newFriendPhoto = req.body.photo;

    //newFriend scores
    var surveyScore = req.body.scores;
    var newScore = 0;

    //loop to grab values in array and add to get newScore
    for (var i = 0; i < surveyScore.length; i++) {
      newScore += parseInt(surveyScore[i]);
    }
    console.log('newFriends score is: ' + newScore);

    //scores for each existing friend
    for (var i = 0; i < friends.length; i++) {
      var compareScores = friends[i].scores;
      console.log('Comparison scores are: ' + compareScores);

      //add up each of the existing scores then put into an array ARRAY NOT CORRECT
      var compTotals = 0;
      var compArr = [];
      for (var j = 0; j < compareScores.length; j++) {
        compTotals += parseInt(compareScores[j]);
        // compArr.push(compTotals);
      }
      console.log('Comp totals are: ' + compTotals);
      console.log('Comp array is: ' + compArr);
    }

    //add newFriend to friends array
    friends.push(newFriend);
    console.log('New friend added! + ' + newFriend);
    //sends newFriend info into api as JSON
    res.json(newFriend);
  });
};

  //compare new friend values to existing friends values
      
        //select closest match

        //display modal with name and picture of closest match
      // Determine the user's most compatible friend using the following as a guide:

      // Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
      // With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.
      // Example:
      // User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
      // User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
      // Total Difference: 2 + 1 + 2 = 5
      // Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on.
      // The closest match will be the user with the least amount of difference.