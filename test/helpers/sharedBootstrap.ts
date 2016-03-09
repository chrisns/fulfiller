import * as chai from "chai";
import * as Knex from "knex";

const knexconfig = require("../../knexfile")[process.env.NODE_ENV || "development"];

chai.use(require("chai-as-promised"))
  .use(require("sinon-chai"))
  .should();

export default {
  afterEach: (done:any) => {
    global.knex = Knex(knexconfig);
    global.knex.migrate.rollback()
      .then(() => done());
  },
  before: (done:any) => {
    done();
  },
  beforeEach: (done:any) => {
    global.knex = Knex(knexconfig);
    global.knex.migrate.latest()
      .then(() => done());
  }
};
