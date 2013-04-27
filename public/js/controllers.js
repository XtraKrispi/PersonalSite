angular.module('MGApp')
  .controller('NavCtrl', ['$scope', '$location', function($scope, $location){
    $scope.navItems = [
      { title: 'Michael Gold', brand: true, url: '/', page: 'home' },
      { title: 'About', url: '/about', page: 'about'}
    ];

    $scope.isActive = function(page){
      return ($location.path().substring(1) || 'home') === page;
    }
  }])
  .controller('TweetsCtrl', ['$scope', 'TwitterService', function($scope, TwitterService){

  }]);