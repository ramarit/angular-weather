'use strict';

/**
 * @ngdoc function
 * @name angularWeatherApp.controller:MoreForecastCtrl
 * @description
 * # MoreForecastCtrl
 * Controller of the angularWeatherApp
 */
angular.module('angularWeatherApp')
  .controller('MoreForecastCtrl', function ($scope, $routeParams, moreForecast) {
    $scope.cityID = $routeParams.cityID;

    $scope.moreForecastData = moreForecast.query({
        cityID: $routeParams.cityID
    });
  });
