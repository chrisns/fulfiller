import Knex = require("knex");
import Promise = require("bluebird");

exports.up = (knex:Knex):Promise<void> =>
  knex.schema.createTable("reclaim", (table:Knex.TableBuilder) => {
    table.increments("id").primary();
    table.string("code");
  });

exports.down = (knex:Knex):Promise<void> =>
  knex.schema.dropTable("users");
