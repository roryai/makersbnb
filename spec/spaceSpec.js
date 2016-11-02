describe('Space', function(){

 var space;

 beforeEach(function(){
   space = new Space("Dandy Cock Inn", "45 Cock Way", 'For all your dandy cock needs!', 8, "user");
 });


 it('should allow an name to be added', function() {
   expect(space.spaceName).toEqual('Dandy Cock Inn');
 });

 it('should allow an address to be added', function() {
   expect(space.address).toEqual("45 Cock Way");
 });

 it('should allow a short description to be added', function() {
   expect(space.desc).toEqual('For all your dandy cock needs!');
 });

 it('should allow a price to be added', function(){
   expect(space.price).toEqual(8);
 });

 it('should make specific dates unavailable', function() {
   var d = new Date(2017, 1, 14);
   var e = new Date(2017, 1, 18);
   var f = new Date(2017, 1, 15);
   var g = new Date(2017, 1, 16);
   var i = new Date(2017, 1, 17);
   space.addDates(d,e);
   space.removeDates(f,g);
   expect(space.availability).toEqual([d.getTime(), i.getTime(), e.getTime()]);
 });

 it('should be able to add real dates to the array', function() {
   var d = new Date(2017, 1, 14);
   var e = new Date(2017,1,15);
   var f = new Date(2017, 1, 16);
   space.addDates(d,f);
   expect(space.availability).toEqual([d.getTime(), e.getTime(), f.getTime()])
 });

});
