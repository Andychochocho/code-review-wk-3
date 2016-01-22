describe("pingPong",function (){
  it("will return a range of one to the chosen number", function () {
    expect(pingPong(4)).to.eql([1, 2, 3, 4]);
  });
});
