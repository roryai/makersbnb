

$( document ).ready(function () {

  var space1 = new Space("Dandy Cock Inn", "45 Cock Way", 'For all your dandy cock needs!', 8, "user");
  var space2 = new Space("Dandy Cock Inn", "45 Cock Way", 'For all your dandy cock needs!', 8, "user");
  var spaces = [];
  spaces.push(space1, space2);
  var fullName

  $.get  ('http://localhost:4567/test.json', function (data){
    fullName = data.fullName;
   $(".welcome").text(fullName);
 });

 console.log(fullName);

  $('#signUp').click(function(){
    var fullName = $('#fullName').val();
    var userName = $('#userName').val();
    var email = $('#email').val();
    var password = $('#password').val();
    var user = new User(fullName, userName, email, password);
    window.location.href = "/";

  });

});
