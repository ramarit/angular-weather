'use strict';

/**
 * @ngdoc overview
 * @name angularWeatherApp
 * @description
 * # angularWeatherApp
 *
 * Main module of the application.
 */
angular
  .module('angularWeatherApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngStorage', // added to enable localStorage features
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    var site_prefix = '/angular-weather';
    $routeProvider
      .when(site_prefix + '/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when(site_prefix + '/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when(site_prefix + '/current/:cityID', {
        templateUrl: 'views/current.html',
        controller: 'CurrentCtrl',
        controllerAs: 'current'
      })
      .when(site_prefix + '/forecast/:cityID', {
        templateUrl: 'views/forecast.html',
        controller: 'ForecastCtrl',
        controllerAs: 'forecast'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
