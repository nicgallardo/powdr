app.factory('AppSharedService', function($rootScope){
  var sharedService = {};

  return sharedSerive
})

app.controller('HomeController', ['$scope', '$http', function ($scope, $http, $location, NgMap) {

  $http.get('/api/v1/resortData').then(function (response) {
    $scope.allResorts = response.data;
    console.log($scope.allResorts)
  });
  $scope.message = 'All Resorts Page'

  // NgMap.getMap().then(function(map) {
  //     console.log(map.getCenter());
  //     console.log('markers', map.markers);
  //     console.log('shapes', map.shapes);
      
  //   })
}]);

app.controller('ResortController', ['$scope', '$http', '$routeParams', '$rootScope', function ($scope, $http, $routeParams, $rootScope, NgMap) {
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

    H
    
    // console.log($scope.allResorts)
    //   $http.get("http://api.worldweatheronline.com/free/v2/ski.ashx?key=21315c00286c7db03c19ff752ba6c&q=" + $scope.resortInfo.latitude +',' + $scope.resortInfo.longitude + "+&format=json").then(function(response){
    //   console.log(response.data.data)
    //   $scope.weather = response.data.data.weather[0]
    //   $scope.site = response.data.data.request[0]
    //   "http://api.worldweatheronline.com/free/v2/ski.ashx?key=36ac695418a963238c6e44746bf57&q=37.776289,-122.395234&format=json"
    //   "http://api.worldweatheronline.com/free/v2/ski.ashx?key=36ac695418a963238c6e44746bf57&q="+ $scope.resortInfo.name +"+co&format=json"
    // })
  
    // $http.get("http://api.wunderground.com/api/2dc07206ff5e682e/geolookup/forecast/q/" + $scope.resortInfo.latitude +',' + $scope.resortInfo.longitude + ".json").then(function(response){
    //   console.log(response.data.forecast, "Look Over Here!")
    //   $scope.weatherUnder = response.data.forecast.txt_forecast.forecastday
    //   // "http://api.wunderground.com/api/2dc07206ff5e682e/geolookup/forecast/q/37.776289,-122.395234.json" Code for geoLocation
    // })
     $http.jsonp('http://www.flickr.com/services/feeds/photos_public.gne?tags='+ $scope.resortInfo.name +'&format=json')
    .success(jsonFlickrFeed = function(data) {
      console.log(data)
      $scope.flickrFeed = data.items;
      // 'http://www.flickr.com/services/feeds/photos_public.gne?tags='+ $scope.resortInfo.name +'CO&format=json'
      // 'http://www.flickr.com/services/feeds/photos_public.gne?tags=37.776289,-122.395234&format=json'
    })
  
    
})

  $scope.message = 'Single Resort Page'
}]);
