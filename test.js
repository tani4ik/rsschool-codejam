const assert = require('assert');
const sumOfOther = require('./sumOfOther.js');
const make = require('./make.js');
const recursion = require('./recursion.js');

describe('Each element is the sum of other elements', () => {
  it('Positive integer values', () => {
    assert.deepStrictEqual(sumOfOther([2, 3, 4, 1]), [8, 7, 6, 9]);
  });
  it('Zero values', () => {
    assert.deepStrictEqual(sumOfOther([0, 0, 0, 0]), [0, 0, 0, 0]);
  });
  it('Negative and positive values', () => {
    assert.deepStrictEqual(sumOfOther([-6, 4, 0, 1000]), [1004, 994, 998, -2]);
  });
  it('Single value', () => {
    assert.deepStrictEqual(sumOfOther([3]), [0]);
  });
  it('Empty array', () => {
    assert.deepStrictEqual(sumOfOther([]), []);
  });
});

describe('Apply function to arguments', () => {
  it('Sum numbers', () => {
    assert.equal(make(15)(34, 21, 666)(41)((a, b) => a + b), 777);
  });
  it('Multiply numbers', () => {
    assert.equal(make(45)(12, 0)(2)((a, b) => a * b), 0);
  });
  it('Empty argument', () => {
    assert.equal(make()((a, b) => a / b), 0);
  });
});

describe('Recursion', () => {
  it('Sample test', () => {
    assert.deepStrictEqual(
      recursion({
        value: 100,
        left: {
          value: 90,
          left: {
            value: 70,
          },
          right: {
            value: 99,
          },
        },
        right: {
          value: 120,
          left: {
            value: 110,
          },
          right: {
            value: 130,
          },
        },
      }), [
        [100],
        [90, 120],
        [70, 99, 110, 130],
      ],
    );
  });
  it('Tree with only left elements', () => {
    assert.deepStrictEqual(
      recursion({
        value: 100,
        left: {
          value: 90,
          left: {
            value: 70,
            left: {
              value: 50,
            },
          },
        },
      }), [
        [100],
        [90],
        [70],
        [50],
      ],
    );
  });
  it('Tree is empty', () => {
    assert.deepStrictEqual(
      recursion({}),
      [],
    );
  });
});
