app.controller('HomeController', ['$scope', '$http', function ($scope, $http, $location) {
  $scope.message = 'Home Page'
  $scope.login = function(){
    window.location.pathname = "/auth/facebook"
  }
}]);
