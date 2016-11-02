

$( document ).ready(function () {


  $('#addSpace').click(function(){
    var name = $('#spaceName').val();
    var address = $('#address').val();
    var description = $('#description').val();
    var price = $('#price').val();
    var space = new Space(name, address, description, price, "Judy");
    console.log(space);
  });

  $('#signUp').click(function(){
    var fullName = $('#fullName').val();
    var userName = $('#userName').val();
    var email = $('#email').val();
    var password = $('#password').val();
    var user = new User(fullName, userName, email, password);
    window.location.href = "http://localhost:4567";
    console.log(user);

  });

  $('#loginButton').click(function(){
    // stop.preventDefault();
    var loginUserName = $('#loginUserName').val();
    var  loginPassword = $('#loginPassword').val();



        var username = "rory";
        var password = "kath";

        if ((loginUserName == username) && (loginPassword == password)) {
          alert ("success")
            return true;
        }
        else {
            alert ("Login was unsuccessful, please check your username and password");
            return false;
        }

  });

});
