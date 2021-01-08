import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { LoginComponent as LoginPageComponent } from './pages/login/login.component';
import { MessageInlineErrorComponent } from './components/message-inline-error/message-inline-error.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterComponent as RegisterPageComponent } from './pages/register/register.component';


@NgModule({
  declarations: [
    LoginComponent,
    LoginPageComponent,
    MessageInlineErrorComponent,
    RegisterComponent,
    RegisterPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
