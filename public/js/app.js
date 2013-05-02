angular.module('MGApp', ['ngResource', 'ngSanitize'])
  .config(['$routeProvider', '$locationProvider', '$httpProvider', function($routeProvider, $locationProvider, $httpProvider){
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', { templateUrl: '/partials/home' })
      .when('/about', { templateUrl: '/partials/about'})
      .when('/admin/blogs', { controller: 'AdminPageCtrl', templateUrl: '/partials/blogAdmin', access: 'private', layout: 'private'})
      .when('/admin', { redirectTo: '/admin/blogs'});
  }]).run(['$rootScope', '$route', function($rootScope, $route){
  	$rootScope.$on('$routeChangeSuccess', function(scope, current){
  		$rootScope.layout = current.layout || 'public';
  	});
  }]);