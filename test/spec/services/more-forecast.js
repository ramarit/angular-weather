'use strict';

describe('Service: moreForecast', function () {

  // load the service's module
  beforeEach(module('angularWeatherApp'));

  // instantiate service
  var moreForecast;
  beforeEach(inject(function (_moreForecast_) {
    moreForecast = _moreForecast_;
  }));

  it('should do something', function () {
    expect(!!moreForecast).toBe(true);
  });

});
