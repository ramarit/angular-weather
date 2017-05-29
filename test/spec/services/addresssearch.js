'use strict';

describe('Service: addresssearch', function () {

  // load the service's module
  beforeEach(module('angularWeatherApp'));

  // instantiate service
  var addresssearch;
  beforeEach(inject(function (_addresssearch_) {
    addresssearch = _addresssearch_;
  }));

  it('should do something', function () {
    expect(!!addresssearch).toBe(true);
  });

});
