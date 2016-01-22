describe("pingPong",function (){
  it("will change all returned numbers divisible by five to pong", function(){
    expect(pingPong(5)).to.eql([1, 2, "ping", 4, 'pong']);
  })
  it("will change all returned numbers divisible by three to ping", function(){
    expect(pingPong(3)).to.eql([1,2,"ping"]);
  });
  it("will return a range of one to the chosen number", function () {
    expect(pingPong(4)).to.eql([1, 2, "ping", 4]);
  });
});
