let GreeterNode = require("../src/greeterNode");


describe("Sayings Greeter", () => {
  it("should greet", () => {
    let greeter = new GreeterNode("John");
    return greeter.greet().should.eql("Hello, John");
  });
});
