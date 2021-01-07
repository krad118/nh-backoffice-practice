import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookCreatedComponent } from './pages/book-created/book-created.component';
import { BookEditComponent } from './pages/book-edit/book-edit.component';
import { BookListComponent } from './pages/book-list/book-list.component';
import { AuthorizatedGuard } from 'src/app/core/guards/authorizated.guard';

const routes: Routes = [
  {
    path: '',
    component: BookListComponent
  },
  {
    path: 'add',
    canActivate: [AuthorizatedGuard],
    component: BookCreatedComponent
  },
  {
    path: 'book/:id',
    component: BookEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
