var app = angular.module('powdrApp', ['ngRoute'])

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/partials/home.html',
        controller: 'HomeController'
      })
      .when('/auth/facebook', {
        controller: 'HomeController',
        redirectTo: '/auth/facebook'
      })
    $locationProvider.html5Mode(true);
})
