import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Book } from 'src/app/lib/interfaces/book';
import { BookService } from 'src/app/lib/services/book.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  bookForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private bookService: BookService
  ) { }

  ngOnInit(): void {
    this.bookForm = this.fb.group({
      name: [null, Validators.required],
      isbn: [null, [
        Validators.required,
        Validators.pattern(/^[0-9]+$/),
        Validators.maxLength(11),
        Validators.minLength(11)
      ]],
      image: [null],
      language: [null, [Validators.required, Validators.pattern(/^es|en$/)]],
      publishedDate: [null, Validators.required],
      publisher: [null, Validators.required],
      numberPages: [null, [Validators.required, Validators.min(1)]],
      license: [null],
      summary: [null, Validators.required],
    })
  }

  get f() {
    return this.bookForm.controls;
  }

  onSubmit(): void {
    if (this.bookForm.valid) {
      const book: Book = this.bookForm.value;
      this.bookService.createBook(book).subscribe(
        book => console.log(book)
      )

    }else {
      console.log(this.bookForm.errors);
    }
  }

  onChangeFile(event): void {
    const image: File = event.target.files[0];
    this.bookForm.get('image').setValue(image);
  }

}
