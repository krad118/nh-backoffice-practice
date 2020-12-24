import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { formatDate } from '@angular/common';
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

  createBook(book: Book): Observable<Book> {
    const formData = this.mapBookToFormData(book);
    return this.http.post<Book>(`${this.apiUrl}`, formData);
  }

  mapBookToFormData(book: Book): FormData {
    const formData = new FormData();
    formData.append('name', book.name);
    formData.append('isbn', book.isbn);
    formData.append('image', book.image, book.image.name);
    formData.append('language', book.language);
    formData.append('publishedDate', formatDate(book.publishedDate, 'yyyy-MM-dd', 'en'));
    formData.append('publisher', book.publisher);
    formData.append('numberPages', String(book.numberPages));
    formData.append('license', book.license);
    formData.append('summary', book.summary);
    return formData;
  }
}
