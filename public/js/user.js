function User (fullName, userName, email, password) {
  this.fullName = fullName;
  this.userName = userName;
  this.email = email;
  this.password = password;
  this.spaces = [];
  this.trips = [];
}

User.prototype.addSpace = function (space) {
  this.spaces.push(space);
};

User.prototype.addTrip = function (booking) {
  this.trips.push(booking);
};
