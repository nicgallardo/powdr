app.controller('HomeController', ['$scope', '$http', function ($scope, $http, $location) {
   $scope.viewResorts = [ {resort: "Vail"}, {resort:"Breckenridge"}, {resort:"Snowmass"}, {resort:"Telluride"}, {resort:"Aspen"}, {resort:"Keystone"}, {resort:"Copper"} ]

   $scope.initResorts = angular.forEach($scope.viewResorts, function(elem){
   $http.get("http://api.worldweatheronline.com/free/v2/ski.ashx?key=36ac695418a963238c6e44746bf57&q="+ elem.resort +"+co&format=json").then(function(response){
      console.log(response.data.data.weather[0])
      $scope.weather = response.data.data.weather[0]
      $scope.site = response.data.data.request[0]
    })
   })
}])

app.controller('ResortController', function($scope, $http, NgMap){
    
    $scope.Resort = function(choice){
      console.log(choice)
      if(choice === 'vail'){
        $scope.viewBarResort = "Vail"
        $scope.snotel = "842:CO"
      }
      if(choice === 'snowmass'){
        $scope.viewBarResort = 'Snowmass'
        $scope.snotel = "542:CO"
      }
      if(choice === 'telluride'){
        $scope.viewBarResort = 'Telluride'
        $scope.snotel = "713:CO"
      }
      if(choice === 'keystone'){
        $scope.viewBarResort = "Keystone"
        $scope.snotel = "505:CO"
      }
      if(choice === 'breckenridge'){
        $scope.viewBarResort = "Breckenridge"
        $scope.snotel = "531:CO"
      }
       $http.get("http://api.worldweatheronline.com/free/v2/ski.ashx?key=36ac695418a963238c6e44746bf57&q="+ $scope.viewBarResort +"+co&format=json").then(function(response){
      console.log(response.data.data)
      $scope.weather = response.data.data.weather[0]
      $scope.site = response.data.data.request[0]
      // "http://api.worldweatheronline.com/free/v2/ski.ashx?key=36ac695418a963238c6e44746bf57&q=37.776289,-122.395234&format=json"
      // "http://api.worldweatheronline.com/free/v2/ski.ashx?key=36ac695418a963238c6e44746bf57&q="+ $scope.viewBarResort +"+co&format=json"
    })
      $.getJSON('http://cors.io/?u=http://api.powderlin.es/station/'+ $scope.snotel +':SNTL?days=7',function(response){
        console.log(response.data[7]);
        $scope.snotelData = response.data[7]
      }) 
    //   $http.get("http://api.wunderground.com/api/2dc07206ff5e682e/geolookup/forecast/q/CO/"+ $scope.viewBarResort +".json").then(function(response){
    //   console.log(response.data.forecast)
    //   $scope.weatherUnder = response.data.forecast.txt_forecast.forecastday
    //   // "http://api.wunderground.com/api/2dc07206ff5e682e/geolookup/forecast/q/37.776289,-122.395234.json" Code for geoLocation
    // })
     $http.jsonp('http://www.flickr.com/services/feeds/photos_public.gne?tags='+ $scope.viewBarResort +'CO&format=json')
    .success(jsonFlickrFeed = function(data) {
      console.log(data)
      $scope.flickrFeed = data.items;
      // 'http://www.flickr.com/services/feeds/photos_public.gne?tags='+ $scope.viewBarResort +'CO&format=json'
      // 'http://www.flickr.com/services/feeds/photos_public.gne?tags=37.776289,-122.395234&format=json'
    })
  
      NgMap.getMap().then(function(map) {
      console.log(map.getCenter());
      console.log('markers', map.markers);
      console.log('shapes', map.shapes);
      
    })

      
    }
    })
  