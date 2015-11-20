var app = angular.module('powdrApp', ['ngRoute', 'ngMap','ngCookies'])


app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/_=_', {
        controller: 'HomeController',
        redirectTo: '/'
      })
      .when('/', {
        templateUrl: '/partials/home.html',
        controller: 'HomeController'
      })
      .when('/user', {
        templateUrl: '/partials/user.html',
        controller: 'UserController'
      })
      .when('/:resortId', {
        templateUrl: '/partials/resort.html',
        controller: 'ResortController'
      })
      .otherwise({
        redirect: '/'
    });
    $locationProvider.html5Mode(true);
})
