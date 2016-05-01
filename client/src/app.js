
// App Module
var app = angular.module('myApp', [
  'ui.router',
  'ngMaterial'
]);


// routing
app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'pages/home/home.html',
      controller: 'HomeCtrl'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'pages/about/about.html',
      controller: 'AboutCtrl'
    });

    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);

});


app.run(['$rootScope', '$location',
  function ($rootScope, $location) {

    $rootScope.$on('$routeChangeStart', function (event, next) {

    });

  }]);
