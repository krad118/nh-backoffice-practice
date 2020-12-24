import { Observable } from 'rxjs';
import { Book } from './book';

export interface BookImplementation {
  getBooks(): Observable<Book[]>;
  getBook(id: number): Observable<Book>;
}
