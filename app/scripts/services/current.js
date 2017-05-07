'use strict';

/**
 * @ngdoc service
 * @name angularWeatherApp.current
 * @description
 * # current
 * Factory in the angularWeatherApp.
 */
angular.module('angularWeatherApp')
  .factory('current', function ($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource('http://api.openweathermap.org/data/2.5/weather?q=:location&units=imperial&APPID=cdadf9a60fdfd34508061bba24e7bd5d', {}, {
      query: {
        method:'GET',
        params:{
          location: 'Seattle,us'
        },
        isArray:false
      }
    });
  });
