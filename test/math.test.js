// math.test.js
const { add, subtract } = require('./math');

describe('add', () => {
  test.each([
    [1, 2, 3],
    [2, 3, 5],
    [5, 5, 10],
    [10, 10, 20],
  ])('adds %i and %i to equal %i', (a, b, expected) => {
    expect(add(a, b)).toBe(expected);
  });
});

describe('subtract', () => {
  test.each([
    [3, 2, 1],
    [5, 3, 2],
    [10, 5, 5],
    [20, 10, 10],
  ])('subtracts %i from %i to equal %i', (a, b, expected) => {
    expect(subtract(a, b)).toBe(expected);
  });
});
