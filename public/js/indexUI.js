

$( document ).ready(function () {

  var space1 = new Space("Dandy Cock Inn", "45 Cock Way", 'For all your dandy cock needs!', 8, "user");
  var space2 = new Space("Dandy Cock Inn", "45 Cock Way", 'For all your dandy cock needs!', 8, "user");
  var spaces = [];
  spaces.push(space1, space2);
  var fullName;

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
    btn.setAttribute('id', id);
    div.appendChild(txt);
    div.appendChild(desc);
    div.appendChild(btn);
    document.body.appendChild(div);
    $("div").last().addClass("box");
  }

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

});
