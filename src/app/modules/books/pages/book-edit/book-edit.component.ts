import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {

  bookId: number;
  constructor(
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.router.params.subscribe((params: Params) => {
      this.bookId = Number(params.id)
    })
  }

}
