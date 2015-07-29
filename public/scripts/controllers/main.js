'use strict';

/**
 * @ngdoc function
 * @name BlackTieApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the BlackTieApp
 */
angular.module('BlackTieApp')
  .controller('MainCtrl', function ($scope, $location, $http) {
	$scope.showNameInput = true;
    $scope.name = "";

    $scope.checkName = function(name) {
        $http.post('/api/name', {name: name})
            .success(function() {
                $scope.name = name;
                $scope.showNameInput = false;
            })
            .error(function(data) {
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
