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
      type: 'node'
    },
    setup: wallaby => {
      "use strict";
      wallaby.delayStart();
      //
      let bootstrap = require('./test/helpers/sharedBootstrap');
      bootstrap.before(() => bootstrap.beforeEach(() => wallaby.start()));
    }
  }
};
