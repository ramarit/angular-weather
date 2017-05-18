'use strict';

/**
 * @ngdoc service
 * @name angularWeatherApp.moreForecast
 * @description
 * # moreForecast
 * Factory in the angularWeatherApp.
 */
angular.module('angularWeatherApp')
  .factory('moreForecast', function ($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource('http://api.openweathermap.org/data/2.5/forecast/daily?id=:cityID&cnt=10&units=imperial&APPID=cdadf9a60fdfd34508061bba24e7bd5d', {}, {
      query: {
        method:'GET',
        params:{
          cityID: '4717560' // Paris, France ID
        },
        isArray:false
      }
    });
  });
