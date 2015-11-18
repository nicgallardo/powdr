var app = angular.module('powdrApp', ['ngRoute'])

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/partials/home.html',
        controller: 'HomeController'
      })
      .when('/auth/facebook', {controller: function(){
        window.location.pathname = "/auth/facebook"
        console.log("route");
      }})
    $locationProvider.html5Mode(true);
})
