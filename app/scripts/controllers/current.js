'use strict';

/**
 * @ngdoc function
 * @name angularWeatherApp.controller:CurrentCtrl
 * @description
 * # CurrentCtrl
 * Controller of the angularWeatherApp
 */
angular.module('angularWeatherApp')
  .controller('CurrentCtrl', function ($scope, $routeParams, current, $localStorage) {
    $scope.cityID = $routeParams.cityID;

    $scope.currentWeather = current.query({
        cityID: $routeParams.cityID
    });

    /*$scope.getColor = function(time) {
        var time = {
            'sunset': time.sys.sunset,
            'sunrise': time.sys.sunrise
        };
        var unix = 100;
        if (100 >= 101) {
            return getColor={{'background-color: black'}};
        }
    }*/

    

    $scope.saveCity = function(city){
    var cityData = {
        'name': city.name,
        'id': city.id
    };
        if (!$localStorage.savedCities){
            $localStorage.savedCities = [cityData];
            //if local storage empty, add saved message for first city in array
            $scope.citySaved = {
                'success': true
            };
        } 
        else {
            // Check to make sure we haven't already saved the city.
            var save = true;
            for (var i=0; i < $localStorage.savedCities.length; i++){
                if ($localStorage.savedCities[i].id === cityData.id) {
                    // this is a duplicate, so don't save
                    save = false;
                }
            }
            if (save===true){
                $localStorage.savedCities.push(cityData);
                // Add object to trigger messages
                $scope.citySaved = {
                    'success': true
                };
            } else {
                console.log('city already saved');
                // Add object to trigger messages
                $scope.citySaved = {
                    'duplicate': true
                };
            }
        }
    };
});
