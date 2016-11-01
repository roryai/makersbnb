

$( document ).ready(function () {


  $('#addSpace').click(function(){
    var name = $('#name').val();
    var address = $('#address').val();
    var description = $('#description').val();
    var price = $('#price').val();
    var space = new Space(name, address, description, price, "Judy");
    console.log(space);
  });

});
