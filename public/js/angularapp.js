var app = angular.module('powdrApp', ['ngRoute'])

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/partials/home.html',
        controller: 'HomeController'
      })

    $locationProvider.html5Mode(true);
})
