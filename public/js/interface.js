

$( document ).ready(function () {

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
          alert ("success");
          window.location.href = "http://localhost:4567/add-space";
            return true;
        }
        else {
            alert ("Login was unsuccessful, please check your username and password");
            return false;
        }
  });

  $('#addSpace').click(function(){
    // var userName = *username from logged in user*
    var name = $('#spaceName').val();
    var address = $('#address').val();
    var description = $('#description').val();
    var price = $('#price').val();
    var space = new Space(name, address, description, price, "user name here");
    // user101.addSpace(space)
    console.log(space);
  });

});
