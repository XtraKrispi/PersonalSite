angular.module('MGApp', [])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider
      .when('/', { templateUrl: '/partials/home' })
      .when('/about', { templateUrl: '/partials/about'});

    $locationProvider.html5Mode(true);
  }]);