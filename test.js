let assert = require('assert');
let sumOfOther = require('./sumOfOther.js');
let make = require('./make.js');
describe("Each element is the sum of other elements", function() {
    it("Positive integer values", function() {
        assert.deepStrictEqual(sumOfOther([2, 3, 4, 1]), [8, 7, 6, 9]);
    });
    it("Zero values", function() {
        assert.deepStrictEqual(sumOfOther([0, 0, 0, 0]), [0, 0, 0, 0]);
    });
    it("Negative and positive values", function() {
        assert.deepStrictEqual(sumOfOther([-6, 4, 0, 1000]), [1004, 994, 998, -2]);
    });
    it("Single value", function() {
        assert.deepStrictEqual(sumOfOther([3]), [0]);
    });
    it("Empty array", function() {
        assert.deepStrictEqual(sumOfOther([]), []);
    });
});

describe("Apply function to arguments", function() {
    it("Sum numbers", function() {
        assert.equal(make(15)(34, 21, 666)(41)((a, b) => a + b), 777);
    });
    it("Multiply numbers", function() {
        assert.equal(make(45)(12, 0)(2)((a, b) => a * b), 0); 
    });
    it("Empty argument", function() {
        assert.equal(make()((a, b) => a / b), 0); 
    });
});