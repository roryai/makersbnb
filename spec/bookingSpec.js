describe ('Booking', function () {

  var booking;
  var space;

  beforeEach(function() {
    space = new Space("Dandy Cock Inn", "45 Cock Way", 'For all your dandy cock needs!', 8, "user");
    user = new User('Bob', 'bob123', 'bob@bob.com', 'bob321');
    booking = new Booking (user, space, 2,5);

  });

  it('should know which user is renting the space', function() {
    expect(booking.renter).toEqual(user);
  });

  it('should know which space is being booked', function() {
    expect(booking.space).toEqual(space);
  });

  it('should know which dates are being booked', function() {
    expect(booking.startDate).toEqual(2);
    expect(booking.endDate).toEqual(5);
  });

  it('should be able to change to be confirmed', function() {
    expect(booking.confirmed).toEqual(false);
    booking.confirm();
    expect(booking.confirmed).toEqual(true);
  });

  it('updates the users tips', function() {
    expect(user.trips).toEqual([booking])
  });


});
