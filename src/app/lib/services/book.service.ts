import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { BookImplementation } from '../interfaces/book-implementation';
import { Book } from '../interfaces/book';

@Injectable({
  providedIn: 'root'
})
export class BookService implements BookImplementation {

  constructor() { }

  getBooks(): Observable<Book[]> {
    return new Observable<Book[]>(() => {});
  };

  getBook(id: number): Observable<Book> {
    return new Observable<Book>(() => {});
  };

  createBook(book: Book): Observable<Book> {
    return new Observable<Book>(() => {});
  };
}
