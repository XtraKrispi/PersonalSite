/*
 * Serve JSON to our AngularJS client
 */

var twitter = require('ntwitter');

var twit = new twitter({
  consumer_key: 'MPsLc4pQTfUDmwQqXhfNw',
  consumer_secret: 'cDQJOXwiKzEZIWcLq8QmHlvdqWPwSZ4jYdkUePz4',
  access_token_key: '77002690-Ns5rgdZntBTBqtlY4v1OUrfDl96tkQjZUhCgsJgY',
  access_token_secret: 'tDBTk5tkzdoiJMJOKsGUkGEHoJhXnqrPaAArGjkLAg'
});

exports.name = function (req, res) {
  res.json({
  	name: 'Bob'
  });
};

exports.tweets = function(req, res){
  twit.getUserTimeline({screen_name: 'XtraKrispi', count: 20}, function(err, data){
    res.json(data);
  });
};