

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
