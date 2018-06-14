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

  it('can clear planes for takeoff', function(){
    airport.clearForLanding(plane);
    airport.clearForTakeoff(plane);
    expect(airport.planes()).toEqual([]);
  });

  it('checks for stormy weather', function(){
    expect(airport.isStormy()).toBeFalsy();
  });

  it('prevents planes from takeoff when stormy', function(){
    spyOn(airport, 'isStormy').and.returnValue(true); //why don't you need a plane to land here?
    expect(function(){airport.clearForTakeoff(plane); }).toThrowError('cannot takeoff during storm'); //why do we need the word function here?
  });

  it('stops plane from landing when weather is stormy', function(){
    spyOn(airport,'isStormy').and.returnValue(true); //why don't you need a plane to land here?
    expect(function(){airport.clearForLanding(plane); }).toThrowError('cannot land during storm'); //why do we need the word function here?
  });
});
