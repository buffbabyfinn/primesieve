describe('primeSieve', function() {
  it("is equal to two", function() {
    expect(primeSieve("prime")).to.equal(2);
  });
  it ("loops through an array, dividing by the last prime number, removing any with a remainer then increases var prime by 1", function(){
    expect(primeSieve("prime")).to.equal(3);
  });
});
