angular.module('MGApp')
  .filter('twitterDate', ['$filter', 'K', function($filter, K){
    return function(input, scope){
      var date = Date.parse(input);
      if (K.ie){
        date = Date.parse(input.replace(/( \+)/, ' UTC$1'))
      }
      
      return $filter('date')(date, scope);
    }
  }])
  .filter('tweet', [function(){
  	return function(input, scope){

  		// Format urls correctly
  		if (scope.entities && scope.entities.urls && scope.entities.urls.length > 0){
  			for (var i = scope.entities.urls.length - 1; i >= 0; i--){
  				var url = scope.entities.urls[i];
  				
  				var text = input.slice(url.indices[0], url.indices[1]);

  				var substringBefore = input.substring(0, url.indices[0]);
  				var substringAfter = input.substring(url.indices[1]);

  				input = substringBefore + "<a class='url' target='_blank' href='" + url.url + "'>" + url.display_url + "</a>" + substringAfter;
  			}
  		}

  		// Format users correctly
  		if (scope.entities && scope.entities.user_mentions && scope.entities.user_mentions.length > 0){
  			for (var i = scope.entities.user_mentions.length - 1; i >= 0; i--){
  				var user = scope.entities.user_mentions[i];

  				var text = input.slice(user.indices[0], user.indices[1]);

  				var substringBefore = input.substring(0, user.indices[0]);
  				var substringAfter = input.substring(user.indices[1]);

  				input = substringBefore + "<a class='user-mention' target='_blank' href='http://www.twitter.com/" + user.screen_name + "'>" + text + "</a>" + substringAfter;
  			}
  		}
  		return input;
  	}
  }]);