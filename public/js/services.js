angular.module('MGApp')
  .factory('TwitterService', ['$http', '$q', function($http, $q) {
        var url = '/api/tweets';
    return {
      getTweets: function(){
        var deferred = $q.defer();

        $http.get(url)
        .success(function(data){
          deferred.resolve(data);
        }).error(function(data){
          deferred.reject(data);
        });

        return deferred.promise;
    }
  }
  }]);