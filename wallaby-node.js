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
      '!test/helpers/sharedBootstrap.ts'
    ],
    env: {
      type: 'node'
    },
    //compilers: {
    //  '**/*.ts': w.compilers.typeScript({module: 'commonjs'})
    //},
    setup: wallaby => {
      "use strict";
      wallaby.delayStart();

      let bootstrap = require('./test/helpers/sharedBootstrap');

      bootstrap.before(() => bootstrap.beforeEach(() => wallaby.start()));
    },

  }
};
