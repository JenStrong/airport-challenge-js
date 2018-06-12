// As an air traffic controller
// To get passengers to a destination
// I want to instruct a plane to land at
//   an airport and confirm that it has landed

'use strict';

describe('Feature test:', function() {
  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane()
    airport = new Airport()
  });

  it ('a plane can land', function() {
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });
});
