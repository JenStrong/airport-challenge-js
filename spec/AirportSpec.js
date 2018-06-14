'use strict';

describe('Airport', function(){
  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpy('plane',['land','takeoff']);
  });

  it('has no planes by default', function(){
    expect(airport.planes()).toEqual([]);
  });

  it('can clear planes for landing', function(){
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });

  it('checks for stormy weather', function(){
    expect(airport.isStormy()).toBeFalsy();
  });

  it('prevents planes from takeoff when stormy', function(){
    spyOn(airport, 'isStormy').and.returnValue(true); //why don't you need a plane to land here?
    expect(function(){airport.clearForTakeoff(plane); }).toThrowError('cannot takeoff during storm');
  });
});
