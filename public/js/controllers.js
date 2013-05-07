angular.module('MGApp')
  .controller('NavCtrl', ['$scope', '$location', '$window', function($scope, $location, $window){
    $scope.navItems = [
      { title: 'Michael Gold', brand: true, url: '/', page: 'home' },
      { title: 'About', url: '/about', page: 'about'}
    ];

    $scope.isActive = function(page){
      return ($location.path().substring(1) || 'home') === page;
    }
  }])
  .controller('TweetsCtrl', ['$scope', 'TwitterService', function($scope, TwitterService){
    $scope.tweets = TwitterService.getTweets();
  }])
  .controller('BlogCtrl', ['$scope', 'BlogService', function($scope, BlogService){
    $scope.blogs = BlogService.getBlogs();
  }])
  .controller('AdminPageCtrl', ['$scope', '$rootScope', function($scope, $rootScope){
  }])
  .controller('BlogAdminCtrl', ['$scope', 'BlogService', function($scope, BlogService){
    $scope.blogs = BlogService.getBlogs();

    $scope.editBlog = function(blog){
      blog.isEditing = true;
      blog.edit = angular.copy(blog);
    };

    $scope.cancelEditing = function(blog){
      delete blog.edit;
      blog.isEditing = false;
    };

    $scope.saveBlog = function(blog){
      blog.title = blog.edit.title;
      blog.content = blog.edit.content;
      delete blog.edit;
      delete blog.isEditing;
      //blog.isEditing = false;
      if (blog.id){
        BlogService.updateBlog(blog);
      } else {
        BlogService.insertBlog(blog);        
      }
    };
  }]);