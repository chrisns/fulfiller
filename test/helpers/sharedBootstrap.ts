import * as chai from "chai";
import * as Knex from "knex";

const knexconfig = require("../../knexfile")[process.env.NODE_ENV || "development"];

chai.use(require("chai-as-promised"))
  .use(require("sinon-chai"))
  .should();

export interface Global {
  expect:any;
  knex:any;
}
// import sinon = require("sinon");
// require("sinon-as-promised")(require("bluebird"));

// global.expect = chai.expect;
// global.sinon = sinon;
// const Knex = require("knex");

// global.Set('knex', 'ff');

export var knex:Knex;

export default {
  afterEach: (done:any) => {
    knex = Knex(knexconfig);
    knex.migrate.rollback()
      .then(() => done());
    done();
  },
  beforeEach: (done:any) => {
    knex = Knex(knexconfig);
    knex.migrate.latest()
      .then(() => done());
  }
};
