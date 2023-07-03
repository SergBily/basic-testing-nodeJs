// Uncomment the code below and write your tests
import { getBankAccount, InsufficientFundsError, TransferFailedError } from '.';

const initialBalance = 50;
const account = getBankAccount(initialBalance);
const amountForWithdraw = 1000;
const anotherAccount = getBankAccount(initialBalance);
const amount = 25;

describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    expect(account.getBalance()).toBe(initialBalance);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    expect(account.withdraw(amountForWithdraw)).toThrowError(
      InsufficientFundsError,
    );
  });

  test('should throw error when transferring more than balance', () => {
    expect(() => {
      account.transfer(amountForWithdraw, anotherAccount);
    }).toThrowError(InsufficientFundsError);
  });

  test('should throw error when transferring to the same account', () => {
    expect(() => {
      account.transfer(amountForWithdraw, account);
    }).toThrowError(TransferFailedError);
  });

  test('should deposit money', () => {
    account.deposit(amount);
    expect(account.getBalance()).toBe(initialBalance + amount);
  });

  test('should withdraw money', () => {
    account.withdraw(amount);
    expect(account.getBalance()).toBe(initialBalance);
  });

  test('should transfer money', () => {
    account.transfer(amount, anotherAccount);
    expect(account.getBalance()).toBe(initialBalance - amount);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    const balance = await account.fetchBalance();
    expect(balance).toEqual(expect.any(Number));
  });

  test('should set new balance if fetchBalance returned number', async () => {
    // Write your tests here
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    // Write your tests here
  });
});
