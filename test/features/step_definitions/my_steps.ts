"use strict";

class Wall {
  constructor(num) {
    this.bottles = num;
  }

  fall(num) {
    this.bottles = this.bottles - num;
  }
}

module.exports = function () {
  var assert = require('assert');
  var wall;

  this.Given("$NUM green bottles are standing on the wall", function (number_of_bottles) {
    wall = new Wall(number_of_bottles);
  });

  this.When("$NUM green bottle accidentally falls", function (number_of_falling_bottles) {
    wall.fall(number_of_falling_bottles);
  });
  this.Then("there are $NUM green bottles standing on the wall", function (number_of_bottles) {
    assert.equal(number_of_bottles, wall.bottles);
  });
};
