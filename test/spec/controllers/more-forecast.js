'use strict';

describe('Controller: MoreForecastCtrl', function () {

  // load the controller's module
  beforeEach(module('angularWeatherApp'));

  var MoreForecastCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MoreForecastCtrl = $controller('MoreForecastCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MoreForecastCtrl.awesomeThings.length).toBe(3);
  });
});
