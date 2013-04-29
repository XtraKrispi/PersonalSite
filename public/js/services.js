angular.module('MGApp')
  .factory('TwitterService', ['$http', '$q', '$log', function($http, $q, $log) {
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
  }])
  .factory('K', [function(){
    var a = navigator.userAgent;
    return {
        ie: a.match(/MSIE\s([^;]*)/)
    }
  }])
  .factory('BlogService', ['$http', '$q', function($http, $q){
    return {
      getBlogs: function(){
        var deferred = $q.defer();

        $http.get('/api/blogs').success(function(data){
          deferred.resolve(data);
        }).error(function(data){
          deferred.reject(data);
        });

        return deferred.promise;
      }
    };
  }]);