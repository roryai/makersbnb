$( document ).ready(function () {

  var startDate
  var endDate
  var availStart
  var availEnd
  var space
  var user = new User('Bob', 'bob123', 'bob@bob.com', 'bob321');
  var booking
  // space.addDates(new Date(2017,0,1), new Date(2017,4,1));

console.log("hello!")

  $.get  ('/currentSpace.json', function (data){
    space = new Space(data.space.space_name, data.space.address, data.space.desc, data.space.price, "user");
    $(".spaceName").text(space.spaceName);
    $(".address").text(space.address);
    $(".desc").text(space.desc);
    $(".price").text(space.price);
 });


  function makeBooking() {
    booking = new Booking(user, space, startDate, endDate);
  };

  function makeAvailable(startDate, endDate) {
    space.addDates(startDate, endDate);
    console.log(space);
  };




  $( function() {
    var dateFormat = "dd/mm/yy",
      from = $( "#bookMeFrom" )
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
          tripStart = $('#bookMeFrom').datepicker('getDate');
        }),

      to = $( "#bookMeTo" ).datepicker({
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
        tripEnd = $('#bookMeTo').datepicker('getDate');
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
          availStart = $('#avFrom').datepicker('getDate');
        }),

      to = $( "#avTo" ).datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 3
      })
      .on( "change", function() {
        from.datepicker( "option", "maxDate", getDate( this ) );
        availEnd = $('#avTo').datepicker('getDate');
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
    // alert ("Hi there " + user.fullName + " you have booked " + space.spaceName);
    window.location.href = "/user";
  });

  $('#availMe').click(function(){
    makeAvailable();
    alert ("Hi there, your space has been made available for bookings")
  })

});
