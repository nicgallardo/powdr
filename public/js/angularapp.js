var app = angular.module('powdrApp', ['ngRoute'])

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/partials/home.html',
        controller: 'HomeController'
      })
      .when('/resorts', {
        templateUrl: '/partials/resorts.html',
        controller: 'ResortController'
      })
      .otherwise( {redirectTo: '/'
      })
    $locationProvider.html5Mode(true);
})
