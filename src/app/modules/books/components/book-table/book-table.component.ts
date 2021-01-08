import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/lib/services/book.service';
import { Book } from 'src/app/lib/interfaces/book';

type headerTable = {header: string, field: string, type?: string};

@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.scss']
})
export class BookTableComponent implements OnInit {

  books: Book[] = [];
  cols: headerTable[] = [];
  actions = [];
  constructor(
    private bookService: BookService
  ) { }

  ngOnInit(): void {
    this.cols = [
        { field: 'image', header: 'Portada', type: 'image' },
        { field: 'id', header: 'Id', type: 'string' },
        { field: 'isbn', header: 'Codigo' },
        { field: 'name', header: 'Nombre' },
        { field: 'publisher', header: 'Publicador' },
    ];

    this.actions = ['edit', 'delete'];

    this.bookService.getBooks().subscribe(
      books => this.books = books
    );
  }

}
