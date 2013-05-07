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

var tweets;

var getTweets = function(){
  console.log('Getting tweets');
  twit.getUserTimeline({screen_name: 'XtraKrispi', count: 20}, function(err, data){
    tweets = data;
    setTimeout(function(){getTweets();}, 300000);
  });
};

var blogs = [
  {id: 1, title: "Blog 1", content: "This is the content", date: '2013-04-28', comments: []},
  {id: 2, title: "Blog 2", content: "This is the content", date: '2013-04-28', comments: []}
];

//getTweets();

exports.name = function (req, res) {
  res.json({
  	name: 'Bob'
  });
};

exports.tweets = function(req, res){
  twit.getUserTimeline({screen_name: 'XtraKrispi', count: 20}, function(err, data){
    tweets = data;
    res.json(tweets);
  });
  //res.json(tweets);
};

exports.blogs = function(req, res){
  res.json(blogs);
};

exports.insertBlog = function(req, res){
  console.log(JSON.stringify(req.body));
  blogs.push(req.body);
};

exports.updateBlog = function(req, res){
  console.log(JSON.stringify(req.body));
  for (var i = 0; i < blogs.length; i++){
    var blog = blogs[i];
    if (blog.id == req.body.id){
      blogs[i] = req.body;
    }
  }
};