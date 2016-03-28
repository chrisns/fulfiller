/* jslint node: true */
"use strict";
import * as chai from "chai";

var Yadda = require('yadda');
var English = Yadda.localisation.English;
var Dictionary = Yadda.Dictionary;
var Promise = require('bluebird');
chai.use(require("chai-as-promised"))
  .use(require("sinon-chai"))
  .should();

class Wall {
  bottles:number;

  constructor(bottles:number) {
    this.bottles = bottles;
  }

  fall(num:number) {
    this.bottles -= num;
  }
}


module.exports = (function () {

  var wall:any;
  var dictionary = new Dictionary().define('NUM', /(\d+)/);
  var library = English.library(dictionary)

    .given("$NUM green bottles are standing on the wall", function (number_of_bottles:number, done:any) {
      wall = new Wall(number_of_bottles);
      done();
    })

    .when("$NUM green bottle accidentally falls", function (number_of_falling_bottles:number, done:any) {
      wall.fall(number_of_falling_bottles);
      done();
    })

    .then("there (?:are|are still) $NUM green bottles standing on the wall", function (number_of_bottles:number, done:any) {
      wall.bottles.should.eql(number_of_bottles * 1);
      done();
    });

  return library;
})
();
