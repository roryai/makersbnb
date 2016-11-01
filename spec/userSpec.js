describe ('User', function () {

var user;

beforeEach(function() {
  user = new User('Bob', 'bob123', 'bob@bob.com', 'bob321');
});

it('should allow a user to enter their name', function() {
  expect(user.fullName).toEqual('Bob');
});

it('should allow a user to enter a user name', function() {
  expect(user.userName).toEqual('bob123');
});

it('should allow a user to enter their email address', function() {
  expect(user.email).toEqual('bob@bob.com');
});

it('should allow a user to enter a password', function() {
  expect(user.password).toEqual('bob321');
});

it('should allow a user to have a space', function () {
  user.addSpace('space');
  expect(user.spaces).toEqual(['space']);
});


});
