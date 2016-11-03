$( document ).ready(function () {

  var startDate
  var endDate
  var availStart
  var availEnd
  var space = new Space("Dandy Cock Inn", "45 Cock Way", 'For all your dandy cock needs!', 8, "user");
  var user = new User('Bob', 'bob123', 'bob@bob.com', 'bob321');
  var booking
  space.addDates(new Date(2017,0,1), new Date(2017,4,1));

  function makeBooking() {
    booking = new Booking(user, space, startDate, endDate);
  };

  function makeAvailable(startDate, endDate) {
    space.addDates(startDate, endDate);
    console.log(space);
  };

  $(".spaceName").text(space.spaceName);
  $(".address").text(space.address);
  $(".desc").text(space.desc);
  $(".price").text(space.price);


  $( function() {
    var dateFormat = "dd/mm/yy",
      from = $( "#from" )
        .datepicker({
          defaultDate: "+1w",
          changeMonth: true,
          numberOfMonths: 3,
          beforeShowDay: function (a) {
            var d = a.getFullYear() + '-' + (a.getMonth() + 1) + '-' + a.getDate();
            if ($.inArray(new Date (d).getTime(), space.availability) !== -1) {
                return [true, "", ""];
            } else {
              return [false, "", "disabled date"];
            }
        }
        })
        .on( "change", function() {
          to.datepicker( "option", "minDate", getDate( this ) );
          tripStart = $('#from').datepicker('getDate');
        }),

      to = $( "#to" ).datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 3,
        beforeShowDay: function (a) {
          var d = a.getFullYear() + '-' + (a.getMonth() + 1) + '-' + a.getDate();
          if ($.inArray(new Date (d).getTime(), space.availability) !== -1) {
              return [true, "", ""];
          } else {
            return [false, "", "disabled date"];
          }
      }
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

  $( function() {
    var dateFormat = "dd/mm/yy",
      from = $( "#avFrom" )
        .datepicker({
          defaultDate: "+1w",
          changeMonth: true,
          numberOfMonths: 3
        })
        .on( "change", function() {
          to.datepicker( "option", "minDate", getDate( this ) );
          availStart = $('#from').datepicker('getDate');
        }),

      to = $( "#avTo" ).datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 3
      })
      .on( "change", function() {
        from.datepicker( "option", "maxDate", getDate( this ) );
        availEnd = $('#to').datepicker('getDate');
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

  $('#bookMe').click(function(){
    makeBooking();
    alert ("Hi there " + user.fullName + " you have booked " + space.spaceName);
    window.location.href = "/user";
  });

  $('#availMe').click(function(){
    makeAvailable();
    alert ("Hi there, your space has been made available for bookings")
  })

});
