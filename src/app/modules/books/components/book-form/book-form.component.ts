import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  bookForm: FormGroup;
  constructor(
    private fb: FormBuilder
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
      image: [null, Validators.required],
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

  }

  onChangeFile(event): void {

  }

}
