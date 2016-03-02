module.exports = function (w) {

  return {
    files: [
      'src/**/*.ts',
      'test/helpers/**/*.*'
    ],
    tests: [
      'test/**/*.js',
      'test/**/*.ts',
      '!test/bootstrap.test.js',
      'test/**/*.json',
      '!test/helpers/**.js'
    ],
    env: {
      type: 'node'
    },
    setup: wallaby => {
      "use strict";
      wallaby.delayStart();

      let bootstrap = require('./test/helpers/sharedBootstrap');

      bootstrap.before(() => wallaby.start());

    },

  }
};
