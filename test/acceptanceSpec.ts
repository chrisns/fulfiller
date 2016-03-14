describe("the system", () => {
  it("should store a list of secrets");
  it("should store a list of valid reclaim codes");
  it("should regularly poll the order server");
  it("should validate the order server queue");
  it("should process each of the items in the server queue");
  it("should not allow two simultaneous processes to process the same order");
  it("should alert when the tool is running low on secrets");
});

describe("order processing", () => {
  it("should not allow a reclaim code to be used more than once");
  it("should submit back to the order server the secret for a given reclaim");
  it("should lock the reclaim code ot the secret before sending the secret");
  it("should submit back the same secret if a reclaim code is added more than once");
  it("should silently skip if it can't get a lock on the reclaim code");
});

describe("basics", () => {
  it("should start with the schema in place", () =>
    global["knex"]("reclaim").columnInfo().should.eventually.eql({
      "code": {
        "defaultValue": null,
        "maxLength": "255",
        "nullable": true,
        "type": "varchar"
      },
      "id": {
        "defaultValue": null,
        "maxLength": null,
        "nullable": false,
        "type": "integer"
      }
    })
  );
});
