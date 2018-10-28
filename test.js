let assert = require('assert');
let sumOfOther = require('./sumOfOther.js');
let make = require('./make.js');
let recursion = require('./recursion.js')
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

describe("Recursion", function() {
    it("Sample test", function() {
        assert.deepStrictEqual(
            recursion({
                value: 100,
                left: {
                    value: 90,
                    left: {
                        value: 70
                    },
                    right: {
                        value: 99
                    }
                },
                right: {
                    value: 120,
                    left: {
                        value: 110
                    },
                    right: {
                        value: 130
                    }
                }
            }), [
                [100],
                [90, 120],
                [70, 99, 110, 130]
            ]);
    });
    it("Tree with only left elements", function() {
        assert.deepStrictEqual(
            recursion({
                value: 100,
                left: {
                    value: 90,
                    left: {
                        value: 70,
                        left: {
                            value: 50
                        }
                    }
                },
            }), [
                [100],
                [90],
                [70],
                [50]
            ]);
    });
    it("Tree is empty", function() {
        assert.deepStrictEqual(
            recursion({}), 
            []);
    });
});