function Booking(user, space, startDate, endDate) {
  this.renter = user;
  this.space = space;
  this.startDate = startDate;
  this.endDate = endDate;
  this.confirmed = false;
  this.renter.addTrip(this);
};


Booking.prototype.confirm = function() {
  this.confirmed = true;
  this.space.removeDates(this.startDate, this.endDate);
};
