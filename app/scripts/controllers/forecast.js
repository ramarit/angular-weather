'use strict';

/**
 * @ngdoc function
 * @name angularWeatherApp.controller:ForecastCtrl
 * @description
 * # ForecastCtrl
 * Controller of the angularWeatherApp
 */
angular.module('angularWeatherApp')
  .controller('ForecastCtrl', function ($scope, $routeParams, forecast) {
    $scope.cityID = $routeParams.cityID;

    $scope.forecastData = forecast.query({
        cityID: $routeParams.cityID
    });
  });
