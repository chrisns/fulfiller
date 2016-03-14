module.exports = function (w) {

  return {
    files: [
      'knexfile.ts',
      'src/**/*.ts',
      'test/helpers/**/*.ts',
      'migrations/**/*.ts'
    ],
    tests: [
      'test/**/*.ts',
      '!test/bootstrap.test.js',
      'test/**/*.json',
      '!test/helpers/**'
    ],
    env: {
      type: 'node',
      runner: process.env.STABLE_NODE
    },
    setup: wallaby => {
      "use strict";
      let bootstrap = require('./test/helpers/sharedBootstrap');

      wallaby.testFramework.suite.beforeEach(bootstrap.beforeEach);
      wallaby.testFramework.suite.beforeAll(bootstrap.before);
      wallaby.testFramework.suite.afterEach(bootstrap.afterEach);
      wallaby.testFramework.suite.afterAll(bootstrap.after);
    }
  }
};
