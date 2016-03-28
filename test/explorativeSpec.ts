/**
 * I'm expecting this file to mostly be exploring various APIs and to be kept purely so there's a reference of how we
 * interact with them
 */
describe("Explorative code", () => {
  it("should start with the schema in place", () =>
    global["knex"]("reclaim").columnInfo().should.eventually.include.keys(["code", "id"])
  );
});
