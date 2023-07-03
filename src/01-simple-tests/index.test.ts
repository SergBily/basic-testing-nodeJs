// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const result = simpleCalculator({ a: 15, b: 21, action: Action.Add });
    expect(result).toBe(36);
  });

  test('should subtract two numbers', () => {
    const result = simpleCalculator({ a: 15, b: 10, action: Action.Subtract });
    expect(result).toBe(5);
  });

  test('should multiply two numbers', () => {
    const result = simpleCalculator({ a: 15, b: 2, action: Action.Multiply });
    expect(result).toBe(30);
  });

  test('should divide two numbers', () => {
    const result = simpleCalculator({ a: 15, b: 3, action: Action.Divide });
    expect(result).toBe(5);
  });

  test('should exponentiate two numbers', () => {
    const result = simpleCalculator({
      a: 2,
      b: 3,
      action: Action.Exponentiate,
    });
    expect(result).toBe(8);
  });

  test('should return null for invalid action', () => {
    const result = simpleCalculator({ a: 15, b: 3, action: '%' });
    expect(result).toBe(null);
  });

  test('should return null for invalid arguments', () => {
    const result = simpleCalculator({ a: '15', b: 3, action: Action.Multiply });
    expect(result).toBe(null);
  });
});
