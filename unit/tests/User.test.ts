import {describe, test, beforeEach, expect} from 'vitest';
import { User } from '../src/User';

describe('', () => {
  let user: User;

  beforeEach(() => {
    user = new User('usr-1', 'alice', 'alice.doe@test.fr', 'standard');
  })

  test('create a loan', () => {
    user.addLoan('bk-1');
    expect(user.currentLoans.length).toEqual(1);
  })

  test('remove a loan', () => {
    user.addLoan('bk-1');
    user.addLoan('bk-2');
    expect(user.currentLoans.length).toEqual(2);

    user.removeLoan('bk-1');
    expect(user.currentLoans.length).toEqual(1);

  })

  test('detect loan limit for standard user', () => {
    user.addLoan('bk-1');
    user.addLoan('bk-2');
    expect(user.canBorrow()).toBe(true)

    user.addLoan('bk-3');
    expect(user.canBorrow()).toBe(false)
  })

  test('detect loan limit for premium user', () => {
    user.category = 'premium'
    user.addLoan('bk-1');
    user.addLoan('bk-2');
    user.addLoan('bk-3');
    expect(user.canBorrow()).toBe(true)

    user.addLoan('bk-4');
    user.addLoan('bk-5');
    expect(user.canBorrow()).toBe(false)
  })
})