

$( document ).ready(function () {

  var space1 = new Space("Dandy Cock Inn", "45 Cock Way", 'For all your dandy cock needs!', 8, "user");
  var space2 = new Space("Dandy Cock Inn", "45 Cock Way", 'For all your dandy cock needs!', 8, "user");
  var spaces = [];
  spaces.push(space1, space2);
  var fullName;

  $.get  ('/currentUser.json', function (data){
    fullName = data.user.full_name;
   $(".welcome").text(fullName);
 });

 $.get ('/allSpaces.json', function (data){
   array = data.spaces;
   for (var i = 0; i < array.length; i++){
     space = new Space(array[i].space_name, array[i].address, array[i].desc, array[i].price, "user");
     id = array[i].id
    //  spaces.push(space);
     addBoxes(space, id);
     $('#' + id).click(function(){
       console.log("hello");
       $.post('/showSpace?id=' + this.id);
       console.log(this.id);
     });
     }
   });
 //   }
 //  //  $("button").click(function() {
 //  //    console.log("hello");
 //  //    $.post('/showSpace',this.id);
 //  //    console.log(this.id);
 //  //  });
 // });


  function addBoxes(space, id) {
    var div = document.createElement('div'),
    txt = document.createTextNode(space.spaceName);
    desc = document.createTextNode(space.desc);
    var btn = document.createElement('input');
    btn.setAttribute('type', 'button');
    btn.setAttribute('name', 'button');
    btn.setAttribute('value', 'book now');
    btn.setAttribute('id', id);
    div.appendChild(txt);
    div.appendChild(desc);
    div.appendChild(btn);
    document.body.appendChild(div);
    $("div").last().addClass("box");
  }


  // (function () {
  //   for (var i=0; i<spaces.length; i++) {
  //     addBoxes(spaces[i], i);
  //   }
  // })();

  $("#0").click(function(){link("test");});
  $("#1").click(function(){link("test");});

  var link = function(name) {
    window.location.href = "/space";
  };

  // addBoxes();
  console.log(document);

});
