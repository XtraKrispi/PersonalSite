angular.module('MGApp')
  .filter('twitterDate', ['$filter', 'K', function($filter, K){
    return function(input, scope){
      var date = Date.parse(input);
      if (K.ie){
        date = Date.parse(input.replace(/( \+)/, ' UTC$1'))
      }
      
      return $filter('date')(date, scope);
    }
  }]);