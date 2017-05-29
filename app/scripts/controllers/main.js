'use strict';

/**
 * @ngdoc function
 * @name angularWeatherApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularWeatherApp
 */

var app = angular.module('angularWeatherApp');

app.controller('MainCtrl', function ($scope, citysearch, $localStorage, $window) {
    $scope.citiesFound = citysearch.find();
    $scope.storage = $localStorage;

    $scope.findCities = function(){
        $scope.citiesFound = citysearch.find({
            query: $scope.location
        });
        $scope.searchQuery = $scope.location;
    };

    $scope.removeCity = function() {
        $window.localStorage.clear();
        $window.location.reload();
    };   
  });



