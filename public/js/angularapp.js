var app = angular.module('powdrApp', ['ngRoute'])

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/partials/home.html',
        controller: 'HomeController'
      })
      .when('/:resortId', {
        templateUrl: '/partials/resort.html',
        controller: 'ResortController'
      })
    $locationProvider.html5Mode(true);
})
