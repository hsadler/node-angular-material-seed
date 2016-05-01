
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


var app = angular.module('myApp');

app.factory('SampleService', function($http) {

  var service = {};

  // sample $http request method
  service.makeRequest = function(message) {
    return $http({
      method: 'GET',
      url: '/api/sample/sampleGet',
      params: {
        message: message
      }
    })
    .then(function(res) {
      service.sampleResponse = res.data;
    }, function(err) {
      console.log('ERROR: ', err);
    });
  };

  return service;

});


var app = angular.module('myApp');


app.controller('AboutCtrl',
  function($scope, SampleService) {

    console.log('AboutCtrl online...');

  });


var app = angular.module('myApp');


app.controller('HomeCtrl', ['$scope',
    function($scope) {

      console.log('HomeCtrl online...');

    }
  ]);
