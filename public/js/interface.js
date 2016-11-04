

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


  function addBoxes(space, id) {
    var div = document.createElement('div'),
    txt = document.createTextNode(space.spaceName);
    desc = document.createTextNode(space.desc);
    var btn = document.createElement('input');
    btn.setAttribute('type', 'button');
    btn.setAttribute('value', 'book now');
    btn.setAttribute('id', id)
    div.appendChild(txt);
    div.appendChild(desc);
    div.appendChild(btn);
    document.body.appendChild(div);
    $("div").last().addClass("box");
  };

  (function () {
    for (var i=0; i<spaces.length; i++) {
      addBoxes(spaces[i], i);
    }
  })();

  $("#0").click(function(){link("test");});
  $("#1").click(function(){link("test");});

  var link = function(name) {
    window.location.href = "/space";
  };

  // addBoxes();
  console.log(document);


  $('#signUp').click(function(){
    var fullName = $('#fullName').val();
    var userName = $('#userName').val();
    var email = $('#email').val();
    var password = $('#password').val();
    var user = new User(fullName, userName, email, password);
    console.log(user);
    window.location.href = "/";

  });

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
