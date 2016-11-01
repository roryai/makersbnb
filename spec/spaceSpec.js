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

 it('should add the correct dates to availability', function() {
   space.addDates(2,5);
   expect(space.availability).toEqual([2,3,4,5]);
 });

 it('should make specific dates unavailable', function() {
   space.addDates(2,5);
   space.removeDates(3,4);
   expect(space.availability).toEqual([2,5]);
 });

});
