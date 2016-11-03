
$( document ).ready(function () {


  var Bob= new User('Bob', 'bob123', 'bob@bob.com', 'bob321');
  var notBob = new User('notBob', 'notBob123', 'notBob@notBob.com', 'notBob321');
  var space = new Space("Dandy Cock Inn", "45 Cock Way", 'For all your dandy cock needs!', 8, Bob);
  space.addDates(new Date(2017,0,1), new Date(2017,4,1));
  var booking = new Booking(notBob, space, new Date(2017, 1, 14), new Date(2017, 1, 20));
  var user = notBob;
  var bookings = [];
  bookings.push(booking);

  console.log(user.trips);

  function addTripBoxes(trip, id) {
    var div = document.createElement('div'),
    txt = document.createTextNode(trip.space.spaceName);
    desc = document.createTextNode(trip.space.desc);
    start = document.createTextNode($.datepicker.formatDate('dd/mm/yy', trip.startDate));
    end = document.createTextNode($.datepicker.formatDate('dd/mm/yy', trip.endDate));
    div.appendChild(desc);
    div.appendChild(start);
    div.appendChild(end);
    document.body.appendChild(div);
    $("div").last().addClass("box");
  };

  function addBookingBoxes(trip, id) {
    var div = document.createElement('div'),
    txt = document.createTextNode(trip.space.spaceName);
    desc = document.createTextNode(trip.space.desc);
    start = document.createTextNode($.datepicker.formatDate('dd/mm/yy', trip.startDate));
    end = document.createTextNode($.datepicker.formatDate('dd/mm/yy', trip.endDate));
    conf = document.createTextNode(trip.confirmed ? "Confirmed" : "Not yet confirmed");
    var btn = document.createElement('input');
    btn.setAttribute('type', 'button');
    btn.setAttribute('value', 'confirm booking');
    btn.setAttribute('id', id);
    div.appendChild(desc);
    div.appendChild(start);
    div.appendChild(end);
    div.appendChild(conf);
    div.appendChild(btn);
    document.body.appendChild(div);
    $("div").last().addClass("box");
  };

  (function () {
    for (var i=0; i<user.trips.length; i++) {
      addTripBoxes(user.trips[i], i);
    }
    var h1 = document.createElement('h1'),
    txt = document.createTextNode("Your Bookings");
    h1.appendChild(txt);
    document.body.appendChild(h1);
    for (var i=0; i<bookings.length; i++) {
      addBookingBoxes(bookings[i],i);
    };
  })();

  $("#0").click(function(){
    bookings[0].confirm();
    console.log(bookings[0]);
    console.log(bookings[0].space);
    alert ("Booking confirmed!");
  });

});
