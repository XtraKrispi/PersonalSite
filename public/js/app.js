angular.module('MGApp', ['ngResource'])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider
      .when('/', { templateUrl: '/partials/home' })
      .when('/about', { templateUrl: '/partials/about'})
      .otherwise({redirectTo: '/'});
    $locationProvider.html5Mode(true);
  }]);