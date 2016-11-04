

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

  $('#loginButton').click(function(){
    // stop.preventDefault();
    var loginUserName = $('#loginUserName').val();
    var  loginPassword = $('#loginPassword').val();

        var username = $('#loginUserName').val();
        var password = $('#loginPassword').val();

        if ((loginUserName == username) && (loginPassword == password)) {
          alert ("success");
          window.location.href = "/";
            return true;
        }
        else {
            alert ("Login was unsuccessful, please check your username and password");
            return false;
        }
  });

});
