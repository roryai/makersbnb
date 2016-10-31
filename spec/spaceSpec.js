describe('Space', function(){

 var space;

 beforeEach(function(){
   space = new Space();
 });

 it('should allow an address to be added', function(){
   space.addAddress('Dandy Cock Inn');
   expect(space.address).toEqual(['Dandy Cock Inn']);
 });

 it('should allow a short description to be added', function(){
   space.addDesp('For all your dandy cock needs!');
   expect(space.desp).toEqual(['For all your dandy cock needs!']);
 });

 it('should allow an address to be added', function(){
   space.addPrice('£7.50');
   expect(space.price).toEqual(['£7.50']);
 });

});
