
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
