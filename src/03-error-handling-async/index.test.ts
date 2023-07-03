// Uncomment the code below and write your tests
import {
  throwError,
  throwCustomError,
  resolveValue,
  MyAwesomeError,
  rejectCustomError,
} from './index';

describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    const expectedValue = 'Hello World!';
    const result = await resolveValue(expectedValue);
    expect(result).toBe(expectedValue);
  });
});

describe('throwError', () => {
  test('should throw error with provided message', () => {
    const expectedErrorMessage = 'My message error';
    expect(() => throwError(expectedErrorMessage)).toThrow(
      expectedErrorMessage,
    );
  });

  test('should throw error with default message if message is not provided', () => {
    expect(() => throwError()).toThrow('Oops!');
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    const expectedErrorMessage = 'This is my awesome custom error!';
    expect(() => throwCustomError()).toThrow(MyAwesomeError);
    expect(() => throwCustomError()).toThrow(expectedErrorMessage);
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    const expectedErrorMessage = 'This is my awesome custom error!';
    await expect(rejectCustomError()).rejects.toThrow(MyAwesomeError);
    await expect(rejectCustomError()).rejects.toThrow(expectedErrorMessage);
  });
});
