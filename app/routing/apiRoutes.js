var friends = require('../data/friends');

module.exports = function (app) {
  // Get ALL friends
  app.get('/api/friends', function (req, res) {
    return res.json(friends);
  });

  // POST a new friend
  app.post('/api/friends', function (req, res) {
    var newFriend = req.body;
    var newFriendName = req.body.name;
    var newFriendPhoto = req.body.photo;
    var diffArr = [];

    //newFriend scores
    var surveyScore = req.body.scores;
    var newScore = 0;

    // loop to grab values in array and add to get newScore
    for (var i = 0; i < surveyScore.length; i++) {
      newScore += parseInt(surveyScore[i]);
    };
    console.log('newFriends score is: ' + newScore);

    //scores for each existing friend
    for (var i = 0; i < friends.length; i++) {
      var compareScores = friends[i].scores;
      console.log('Comparison scores are: ' + compareScores);
      //add up each of the existing scores then put into an array
      var compTotals = 0;
      for (var j = 0; j < compareScores.length; j++) {
        compTotals += parseInt(compareScores[j]);
        var scoreDiff = Math.abs(compTotals - newScore);
      }
      diffArr.push(scoreDiff);
      var minDiff = Math.min.apply(null, diffArr);
      console.log('Comp totals are: ' + compTotals);
      console.log('Score diffs are: ' + scoreDiff);
      console.log('Diff arr: ' + diffArr);
      console.log('Min diff: ' + minDiff);
    }

    //loops through and subtracts existing scores from new score
    // for (var i = 0; i < friends.length; i++) {
    //   var totalDiff = 0;
    //   var totalDiffArr = [];
    //   for (var j = 0; j < 10; j++) {
    //       var scoreDiff = Math.abs(friends[i].scores[j] - newFriend.scores[j]);
    //       totalDiff += scoreDiff;
    //       // totalDiffArr.push(totalDiff);
    //   }
    //   console.log('Total diff is: ' + totalDiff);
    //   // console.log('Array is: ' + totalDiffArr);
    // };
    //DO WE NEED TO MAKE AN ARRAY TO FIND THE MIN???


    //add newFriend to friends array
    friends.push(newFriend);
    console.log('New friend added! + ' + newFriend);
    //sends newFriend info into api as JSON
    res.json(newFriend);
  });
};