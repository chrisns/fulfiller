import Bookshelf = require("bookshelf");
import Knex = require("knex");
let app = require("../src/app");


describe("app exists", () => {
  it("should greet", () => {
    chai.expect(app).to.not.be.undefined;
  });

  it("ra", () => {
    let knex = Knex({
      client: "sqlite3",
      connection: {
        filename: ":memory:"
      }
    });
    let bookshelf = Bookshelf(knex);

    class User extends bookshelf.Model<User> {
      private tableName:string = "users";
    }
    return knex.schema.createTable("users", (table:Knex.TableBuilder) => {
        table.increments("id").primary();
        table.string("name");
      })
      .then(() =>
        new User({name: "foo"})
      )
      .then((user:User) => user.save())
      .then((user:User) =>
        knex("users")
          .select()
      )
      .tap((users:Knex.Select):void => console.log(users))
      .then((users:Knex.Select) => chai.expect(users).to.eql([{id: 1, name: "foo"}]));
  });
});
