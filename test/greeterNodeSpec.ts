let GreeterNode = require("../src/greeterNode");


describe("Sayings Greeter", () => {
    it("should greet", () => {
        let greeter = new GreeterNode("John");
        chai.expect(greeter.greet()).to.eql("Hello, John");
    });
});
