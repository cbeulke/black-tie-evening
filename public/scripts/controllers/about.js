'use strict';

/**
 * @ngdoc function
 * @name BlackTieApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the BlackTieApp
 */
angular.module('BlackTieApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
