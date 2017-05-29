'use strict';

/**
 * @ngdoc service
 * @name angularWeatherApp.addresssearch
 * @description
 * # addresssearch
 * Factory in the angularWeatherApp.
 */
angular.module('angularWeatherApp')
  .factory('addresssearch', function ($resource) {
    // Service logic
    // ...


    // Public API here
    return $resource('https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyDXQq5phpUKG8R_VgJqXd3CilhnAGS69Nw', {}, {
      find: {
        method: 'GET',
        params: {
          
        }
      }
    })
  });
