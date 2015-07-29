'use strict';

/**
 * @ngdoc function
 * @name BlackTieApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the BlackTieApp
 */
angular.module('blackTieApp')
  .controller('MainCtrl', function ($scope, $location, $http) {
	$scope.showNameInput = true;
    $scope.invalidName = false;
    $scope.name = "";

    $scope.checkName = function(name) {
        $http.post('/api/name', {name: name})
            .success(function() {
                $scope.name = name;
                $scope.showNameInput = false;
                $scope.invalidName = false;
            })
            .error(function(data) {
                $scope.invalidName = true;
                console.error(data);
            });
    };

    $scope.checkCode = function(code) {
        $http.post('/api/code', {name: $scope.name, code: code})
            .success(function(data) {
                $location.path('/warning');
            })
            .error(function(data) {
                console.error(data);
            });
    };
  });
