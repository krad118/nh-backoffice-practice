import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageInlineErrorComponent } from './components/message-inline-error/message-inline-error.component';



@NgModule({
  declarations: [
    MessageInlineErrorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MessageInlineErrorComponent
  ]
})
export class SharedModule { }
