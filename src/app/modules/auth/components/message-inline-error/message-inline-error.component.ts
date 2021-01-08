import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-message-inline-error',
  templateUrl: './message-inline-error.component.html',
  styleUrls: ['./message-inline-error.component.scss']
})
export class MessageInlineErrorComponent implements OnInit {

  @Input() field: FormControl;
  errors = {
    required: "Es un campo obligatorio",
    errorAccess: "Usuario o password incorrecto",
    email: "no es un email correcto"
  }
  errorsMessage: string[];
  constructor() { }

  ngOnInit(): void {
    this.errorsMessage = this.getErrorsMessage();
  }

  getErrorsMessage(): string[] {
    let messages = []
    for (let propertyName in this.field.errors) {
      if (this.errors.hasOwnProperty(propertyName)) {
        messages.push(this.errors[propertyName])
      }
    }
    return messages
  }

}
