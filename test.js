let assert = require('assert');
let sumOfOther = require('./sumOfOther.js');
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