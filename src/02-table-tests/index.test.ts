// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
  { a: 15, b: 10, action: Action.Subtract, expected: 5 },
  { a: 150, b: 10, action: Action.Subtract, expected: 140 },
  { a: 87, b: 67, action: Action.Subtract, expected: 20 },
  { a: 15, b: 2, action: Action.Multiply, expected: 30 },
  { a: 5, b: 6, action: Action.Multiply, expected: 30 },
  { a: 120, b: 56, action: Action.Multiply, expected: 6720 },
  { a: 15, b: 3, action: Action.Divide, expected: 5 },
  { a: 21, b: 7, action: Action.Divide, expected: 3 },
  { a: 90, b: 9, action: Action.Divide, expected: 10 },
  { a: 2, b: 3, action: Action.Exponentiate, expected: 8 },
  { a: 2, b: 5, action: Action.Exponentiate, expected: 32 },
  { a: 2, b: 7, action: Action.Exponentiate, expected: 128 },
  { a: 15, b: 3, action: '%', expected: null },
  { a: 15, b: 3, action: '&', expected: null },
  { a: 15, b: 3, action: '$', expected: null },
  { a: '15', b: 3, action: Action.Multiply, expected: null },
  { a: null, b: 3, action: Action.Divide, expected: null },
  { a: true, b: 5, action: Action.Exponentiate, expected: null },
];

describe('simpleCalculator', () => {
  testCases.forEach((testCase) => {
    test('should ${testCase.action} two numbers', () => {
      const result = simpleCalculator({
        a: testCase.a,
        b: testCase.b,
        action: testCase.action,
      });
      expect(result).toBe(testCase.expected);
    });
  });
});
