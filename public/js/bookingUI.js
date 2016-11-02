$( document ).ready(function () {

  var startDate
  var endDate
  var space = new Space("Dandy Cock Inn", "45 Cock Way", 'For all your dandy cock needs!', 8, "user");
  var user = new User('Bob', 'bob123', 'bob@bob.com', 'bob321');
  var booking

  function makeBooking() {
    booking = new Booking(user, space, startDate, endDate);
    console.log(booking)
  };



  $( function() {
    var dateFormat = "dd/mm/yy",
      from = $( "#from" )
        .datepicker({
          defaultDate: "+1w",
          changeMonth: true,
          numberOfMonths: 3
        })
        .on( "change", function() {
          to.datepicker( "option", "minDate", getDate( this ) );
          tripStart = $('#from').datepicker('getDate');
        }),

      to = $( "#to" ).datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 3
      })
      .on( "change", function() {
        from.datepicker( "option", "maxDate", getDate( this ) );
        tripEnd = $('#to').datepicker('getDate');
      });

    function getDate( element ) {
      var date;
      try {
        date = $.datepicker.parseDate( dateFormat, element.value );
      } catch( error ) {
        date = null;
      }

      return date;
    }
  });

  // console.log(date);
  // console.log();

  $('#bookMe').click(function(){
    makeBooking();
    alert ("Hi there " + user.fullName + " you have booked " + space.spaceName);
    // window.location.href = "http://localhost:4567";
  });

});
