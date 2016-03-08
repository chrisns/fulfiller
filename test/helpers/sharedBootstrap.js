global.rewire = require('rewire');
global.freeport = require('freeport');
global.chai = require('chai')
  .use(require('chai-as-promised'))
  .use(require('chai-things'))
  .use(require('sinon-chai'))
  .should();
global.expect = chai.expect;
global._ = require('lodash');
global.sinon = require('sinon');
require('sinon-as-promised')(require('bluebird'));

module.exports = {
  before: done => {
    done();
  },
  after: done => {
    done();
  }
};
