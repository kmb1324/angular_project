 'use strict';

angular.module('myApp.uploadIMG', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/uploadIMG', {
    templateUrl: 'uploadIMG/uploadIMG.html',
    controller: 'ExampleController'
	
  });
}])

.controller('ExampleController', ['$scope', function($scope) {
  $scope.master = {};

  $scope.update = function(Image) {
	$scope.master = angular.copy(Image);
  };

  $scope.reset = function() {
	$scope.user = angular.copy($scope.master);
  };

  $scope.reset();
}]);