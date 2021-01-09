import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { AuthorizatedStorageService } from 'src/app/core/services/authorizated-storage.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  passwordFieldText: boolean;
  loginForm: FormGroup;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private authorizatedStorage: AuthorizatedStorageService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.loginForm = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
    this.passwordFieldText = false;
  }

  get f() {
    return this.loginForm.controls;
  }

  showHidepassword() {
    this.passwordFieldText = !this.passwordFieldText;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username').value;
      const password = this.loginForm.get('password').value;
      this.authService.login(username, password).subscribe(
        token => {
          this.authorizatedStorage.setTokenStorage(token.token);
          this.router.navigate([environment.loginRedirect]);
        },
        error => {
          this.loginForm.setErrors({"submit": error.message});
        }
      )
    }
  }
}
