// As an air traffic controller
// To get passengers to a destination
// I want to instruct a plane to land at
//   an airport and confirm that it has landed
//
'use strict';

describe('Feature test:', function(){
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });

  it('planes can be instructed to land at an airport', function(){
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });

  it('a plane can be instructed to take off from an airport', function(){
    plane.land(airport)
    plane.takeoff();
    expect(airport.planes).not.toContain(plane);
  });

  it('blocks takeoff when weather is stormy', function(){
     plane.land(airport);
     spyOn(airport,'isStormy').and.returnValue(true);
     expect(function(){ plane.takeoff();}).toThrowError('cannot takeoff during storm');
     expect(airport.planes()).toContain(plane);
   });

   it('block landing when weather is stormy', function(){
     spyOn(airport,'isStormy').and.returnValue(true);
     expect(function(){ plane.land(airport);}).toThrowError('cannot land during storm');
   });
});
