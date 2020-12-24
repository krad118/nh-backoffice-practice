import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookService } from './book.service';
import { Book } from '../interfaces/book';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookApiService extends BookService {

  apiUrl = `${environment.apiUrl}book/`;
  constructor(
    private http: HttpClient
  ) { 
    super();
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}`);
  };
  getBook(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}${id}/`);
  };
}
