app.controller('HomeController', ['$scope', '$http', function ($scope, $http, $location) {
  $scope.message = 'Home Page'


}])

app.controller('ResortController', function($scope, $http){

    $scope.state = function(choice){
      console.log(choice)
      if(choice === 'vail'){
        $scope.viewBarState = "Vail"
        $scope.snotel = "842:CO"
      }
      if(choice === 'snowmass'){
        $scope.viewBarState = 'Snowmass'
        $scope.snotel = "542:CO"
      }
      if(choice === 'telluride'){
        $scope.viewBarState = 'Telluride'
        $scope.snotel = "713:CO"
      }
      if(choice === 'keystone'){
        $scope.viewBarState = "Keystone"
        $scope.snotel = "505:CO"
      }
      if(choice === 'breckenridge'){
        $scope.viewBarState = "breckenridge"
        $scope.snotel = "531:CO"
      }
       $http.get("http://api.worldweatheronline.com/free/v2/ski.ashx?key=36ac695418a963238c6e44746bf57&q="+ $scope.viewBarState +"+co&format=json").then(function(response){
      console.log(response.data.data)
      $scope.weather = response.data.data.weather[0]
      $scope.site = response.data.data.request[0]
    })
      $.getJSON('http://cors.io/?u=http://api.powderlin.es/station/'+ $scope.snotel +':SNTL?days=7',function(response){
        console.log(response.data[7]);
        $scope.snotelData = response.data[7]
      }) 
      
    }
  })