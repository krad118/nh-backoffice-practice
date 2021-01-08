import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { BooksRoutingModule } from './books-routing.module';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookCreatedComponent } from './pages/book-created/book-created.component';
import { BookEditComponent } from './pages/book-edit/book-edit.component';
import { BookTableComponent } from './components/book-table/book-table.component';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';

import { BookService } from 'src/app/lib/services/book.service';
import { BookApiService } from 'src/app/lib/services/book-api.service';
import { BookFormComponent } from './components/book-form/book-form.component';
import { SharedModule as MyAppSharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    BookListComponent,
    BookCreatedComponent,
    BookEditComponent,

    BookTableComponent,

    BookFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BooksRoutingModule,
    ButtonModule,
    TableModule,
    PanelModule,
    MyAppSharedModule,
  ],
  providers: [{provide: BookService, useClass: BookApiService}],
})
export class BooksModule { }
