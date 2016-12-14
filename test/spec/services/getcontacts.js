'use strict';

describe('Service: getContacts', function () {

  // load the service's module
  beforeEach(module('trialFrontEndApp'));

  // instantiate service
  var getContacts;
  beforeEach(inject(function (_getContacts_) {
    getContacts = _getContacts_;
  }));

  it('should do something', function () {
    expect(!!getContacts).toBe(true);
  });

});
