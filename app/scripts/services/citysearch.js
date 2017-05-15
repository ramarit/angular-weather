'use strict';

/**
 * @ngdoc service
 * @name angularWeatherApp.citysearch
 * @description
 * # citysearch
 * Factory in the angularWeatherApp.
 */
angular.module('angularWeatherApp')
  .factory('citysearch', function ($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource('http://api.openweathermap.org/data/2.5/find?q=:query&units=imperial&type=like&mode=json&APPID=cdadf9a60fdfd34508061bba24e7bd5d', {}, {
      find: {
        method: 'GET',
        params: {
          query: 'seattle'
        },
        isArray: false
      }
    });
  });