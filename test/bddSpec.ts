/* global featureFile, scenarios, steps */
"use strict";

declare var featureFile:any;
declare var scenarios:any;
declare var steps:any;

var sinon = require("sinon");

var Yadda = require('yadda');
Yadda.plugins.mocha.StepLevelPlugin.init();

new Yadda.FeatureFileSearch('test/features').each(function (file:any) {
  featureFile(file, function (feature:any) {

    var library = require('./features/step_definitions/my_steps');
    var yadda = Yadda.createInstance(library);

    scenarios(feature.scenarios, (scenario:any) =>
      steps(scenario.steps, (step:any, done:any) =>
        yadda.run(step, done)
      )
    );
  });
});
