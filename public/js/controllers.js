


app.controller('HomeController', function ($scope, $http, $location, $rootScope, NgMap, $cookies) {

  $http.get('/api/v1/resortData').then(function (response) {
    $scope.allResorts = response.data;
  });
  
  $scope.message = 'All Resorts Page'

  $http.get('/_=_').then(function (response) {
    $cookies.put('facebookId', response.data.facebookId);
    $cookies.put('firstName', response.data.firstName);
    $cookies.put('lastName', response.data.lastName);
    $scope.user = $cookies.getAll()
    // console.log(response.data);
    // console.log($scope.user);
  })
});

app.controller('UserController', function($scope, $http, $routeParams, $rootScope, $window, $cookies){
  $scope.user = $cookies.getAll();
  $http.get('/userFavorites').then(function (response) {
    $scope.favorites = response.data
    console.log($scope.favorites);
  })
})


app.controller('ResortController', function ($scope, $http, $routeParams, $rootScope, $location, $window, NgMap, $cookies) {
  $scope.user = $cookies.getAll()
  $scope.resortId = $routeParams.resortId;
  // console.log($location.path());
  $http.get('/isfav' + $location.path()).then(function (response){
    // console.log($scope.isfav);
    $scope.isfav = response.data;
  })

  $http.get('/api/v1/resortData').then(function (response) {
    $scope.allResorts = response.data;
    for(var i=0; i < $scope.allResorts.length; i++) {
      if ($scope.allResorts[i].id === $scope.resortId) {
        $scope.resortInfo = $scope.allResorts[i]     
      }
    }
    console.log($scope.allResorts)
    $http.get("http://api.worldweatheronline.com/free/v2/ski.ashx?key=21315c00286c7db03c19ff752ba6c&q=" + $scope.resortInfo.latitude +',' + $scope.resortInfo.longitude + "+&format=json").then(function(response){
      console.log(response.data.data)
      $scope.weather = response.data.data.weather[0]
      $scope.site = response.data.data.request[0]
    })
    $http.get("http://api.wunderground.com/api/2dc07206ff5e682e/geolookup/forecast/q/" + $scope.resortInfo.latitude +',' + $scope.resortInfo.longitude + ".json").then(function(response){
      console.log(response.data.forecast, "Look Over Here!")
      $scope.weatherUnder = response.data.forecast.txt_forecast.forecastday  
    })
     $http.jsonp('http://www.flickr.com/services/feeds/photos_public.gne?tags='+ $scope.resortInfo.name +'&format=json')
    .success(jsonFlickrFeed = function(data) {
      // console.log(data)
      $scope.flickrFeed = data.items;
     
    })


})

  $scope.message = 'Single Resort Page'

});
