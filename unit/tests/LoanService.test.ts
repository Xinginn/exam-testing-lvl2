import {describe, test, beforeEach, expect} from 'vitest';
import { Book } from '../src/Book';
import { LoanService } from '../src/LoanService';
import { User } from '../src/User';


describe('LoanService', () => {
  let loanService: LoanService;
  let bookA: Book;
  let user: User;

  beforeEach(() => {
    loanService = new LoanService();
    bookA = new Book('bk-1', 'L\'odeur du sanglier', 'Felix Ravella');
    user = new User('usr-1', 'alice', 'alice.doe@test.fr', 'standard');
  });

  test('add book', () => {
    loanService.addBook(bookA);

    expect(loanService.getBook(bookA.id)).toBe(bookA);
  });

  test('does not add duplicate book', () => {
    loanService.addBook(bookA);
    loanService.addBook(bookA);

    expect(loanService.getAvailableBooks().length).toEqual(1)
  });


  test('borrow a book', () => {
    loanService.addBook(bookA);
    loanService.addUser(user);

    const borrowDate = new Date()
    
    const result = loanService.borrowBook(bookA.id, user.id, borrowDate);
    expect(result).toBe(true);
    expect(bookA.borrowedBy).toBe(user.id);
    expect(bookA.borrowDate).toBe(borrowDate);
    expect(bookA.isAvailable()).toBe(false);
    expect(user.currentLoans.includes(bookA.id)).toBe(true)
  });

  test('cannot borrow unvailable book', () => {
    loanService.addBook(bookA);
    bookA.status = 'borrowed';

    loanService.addUser(user);
    const result = loanService.borrowBook(bookA.id, user.id);
    expect(result).toBe(false);
    expect(user.currentLoans.includes(bookA.id)).toBe(false)
  })

});