import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Book } from 'src/app/lib/interfaces/book';
import { BookService } from 'src/app/lib/services/book.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  @Input() bookId: number;
  bookForm: FormGroup;
  imagePreviewSource: string;
  constructor(
    private fb: FormBuilder,
    private bookService: BookService
  ) { }

  ngOnInit(): void {
    let bookData = {
      id: null,
      name: null,
      isbn: null,
      image: null,
      language: null,
      publishedDate: null,
      publisher: null,
      numberPages: null,
      license: null,
      summary: null,
    }


    if (this.bookId) {
      this.bookService.getBook(this.bookId).subscribe(
        book => {
          bookData['id'] = this.bookId;
          bookData['name'] = book.name;
          bookData['isbn'] = book.isbn;
          this.previewImage(book.image);
          bookData['language'] = book.language;
          bookData['publishedDate'] = book.publishedDate;
          bookData['publisher'] = book.publisher;
          bookData['numberPages'] = book.numberPages;
          bookData['license'] = book.license;
          bookData['summary'] = book.summary;
          this.bookForm = this.makeForm(bookData);
        }
      )
    }else {
      this.bookForm = this.makeForm(bookData);
    }

    
  }

  setFile(imageUrl) {
    let reader = new FileReader();
    reader.readAsDataURL(imageUrl);
    reader.onload = () => {
      this.bookForm.patchValue({
        image: reader.result
      })
    }
  }

  previewImage(url) {
    this.imagePreviewSource = url;
  }

  makeForm(bookData): FormGroup {
    return this.fb.group({
      name: [bookData.name, Validators.required],
      isbn: [bookData.isbn, [
        Validators.required,
        Validators.pattern(/^[0-9]+$/),
        Validators.maxLength(11),
        Validators.minLength(11)
      ]],
      image: [null],
      language: [bookData.language, [Validators.required, Validators.pattern(/^es|en$/)]],
      publishedDate: [bookData.publishedDate, Validators.required],
      publisher: [bookData.publisher, Validators.required],
      numberPages: [bookData.numberPages, [Validators.required, Validators.min(1)]],
      license: [bookData.license],
      summary: [bookData.summary, Validators.required],
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
