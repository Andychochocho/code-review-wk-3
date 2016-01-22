describe("pingPong",function (){
  it("will change numbers divisible by both three and five to pingpong", function(){
    expect(pingPong(15)).to.eql([1, 2, "<li>ping</li>", 4, "<li>pong</li>", "<li>ping</li>", 7, 8, "<li>ping</li>", "<li>pong</li>", 11, "<li>ping</li>", 13, 14, "<li>pingpong</li>"]);
  })
  it("will change all returned numbers divisible by five to pong", function(){
    expect(pingPong(5)).to.eql([1, 2, "<li>ping</li>", 4, '<li>pong</li>']);
  })
  it("will change all returned numbers divisible by three to ping", function(){
    expect(pingPong(3)).to.eql([1,2,"<li>ping</li>"]);
  });
  it("will return a range of one to the chosen number", function () {
    expect(pingPong(4)).to.eql([1, 2, "<li>ping</li>", 4]);
  });
});
