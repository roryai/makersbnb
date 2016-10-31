describe('Space', function(){

  var space;

  beforeEach(function(){
    space = new Space();
  });

  it('should return an address', function(){
    expect(space.returnAddress()).toEqual('Windsor Castle');
  });

});
