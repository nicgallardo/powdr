app.controller('HomeController', ['$scope', '$http', function ($scope, $http, $location) {
  $http.get('/api/v1/allResorts').then(function (response) {
    $scope.data = response.data;
    console.log($scope.data)
  });
  $scope.message = 'Home Page'
  
}]);

app.controller('FacebookController', ['$scope', '$http', function ($scope, $http, $location) {
  
}]);