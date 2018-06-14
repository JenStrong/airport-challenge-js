'use strict';

function Plane (){};

Plane.prototype.land = function(airport) {
  this._location = airport;
  airport.clearForLanding(this);
};

Plane.prototype.takeoff = function () {
  this._location.clearForTakeoff(); // how does it have acces to this._locaiton?
};
