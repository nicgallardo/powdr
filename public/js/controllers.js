app.controller('HomeController', ['$scope', '$http', function ($scope, $http, $location) {

  $http.get('/api/v1/resortData').then(function (response) {
    $scope.allResorts = response.data;
    console.log($scope.allResorts)
  });
  $scope.message = 'All Resorts Page'
}]);

app.controller('ResortController', ['$scope', '$http', '$routeParams', '$rootScope', function ($scope, $http, $routeParams, $rootScope) {
  $scope.resortId = $routeParams.resortId;
  console.log($scope.resortId)
  $http.get('/api/v1/resortData').then(function (response) {
    $scope.allResorts = response.data;
    for(var i=0; i < $scope.allResorts.length; i++) {
      if ($scope.allResorts[i].id === $scope.resortId) {
        $scope.resortInfo = $scope.allResorts[i]
        console.log($scope.resortInfo)
      }
    }
  })

  $scope.message = 'Single Resort Page'
}]);
