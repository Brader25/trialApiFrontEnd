'use strict';

describe('Service: getBlogPosts', function () {

  // load the service's module
  beforeEach(module('trialFrontEndApp'));

  // instantiate service
  var getBlogPosts;
  beforeEach(inject(function (_getBlogPosts_) {
    getBlogPosts = _getBlogPosts_;
  }));

  it('should do something', function () {
    expect(!!getBlogPosts).toBe(true);
  });

});
