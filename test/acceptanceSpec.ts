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


/*

 Given the order server has 0 unfulfilled valid orders
 Then the service should sleep for 1 second

 Given the order server has 1 unfulfilled valid orders
 Then the service should fulfil 1 orders
 And the service should reject 0 orders
 And the service should sleep for 1 second

 Given the order server has 2 unfulfilled valid orders
 Then the service should fulfil 2 orders
 And the service should reject 0 orders
 And the service should sleep for 1s

 Given the order server has 2 unfulfilled valid orders
 And the order server has 1 unfulfilled invalid orders
 Then the service should fulfil 2 orders
 And the service should reject 1 orders


 */
