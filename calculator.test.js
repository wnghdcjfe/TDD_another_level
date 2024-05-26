// calculator.test.js
const Calculator = require('./calculator');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test('adds two numbers', () => {
    expect(calculator.add(1, 2)).toBe(3);
  });

  test('subtracts two numbers', () => {
    expect(calculator.subtract(5, 3)).toBe(2);
  });

  test('multiplies two numbers', () => {
    expect(calculator.multiply(2, 4)).toBe(8);
  });

  test('divides two numbers', () => {
    expect(calculator.divide(10, 2)).toBe(5);
  });

  test('throws error when dividing by zero', () => {
    expect(() => calculator.divide(10, 0)).toThrow("Cannot divide by zero");
  });
});
