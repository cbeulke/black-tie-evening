'use strict';

/**
 * @ngdoc overview
 * @name BlackTieApp
 * @description
 * # BlackTieApp
 *
 * Main module of the application.
 */
angular
  .module('BlackTieApp', [
    'ngAnimate',
    // 'ngCookies',
    // 'ngResource',
    'ngRoute',
    // 'ngSanitize',
    // 'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/decision', {
        templateUrl: 'views/decision.html',
        controller: 'DecisionCtrl'
      })
      .when('/success', {
        templateUrl: 'views/success.html',
        controller: 'SuccessCtrl'
      })
      .when('/warning', {
        templateUrl: 'views/warning.html',
        controller: 'WarningCtrl'
      })
      .when('/cancelled', {
        templateUrl: 'views/cancelled.html',
        controller: 'CancelledCtrl'
      })
      .when('/dresscode', {
        templateUrl: 'views/dresscode.html',
        controller: 'DresscodeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
