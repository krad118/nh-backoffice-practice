import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        ReactiveFormsModule,
      ],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be valid', () => {
    component.loginForm.controls['username'].setValue('admin');
    component.loginForm.controls['password'].setValue('peru2018');
    fixture.detectChanges();
    expect(component.loginForm.valid).toEqual(true);
  });

  it('form should be invalid', () => {
    component.loginForm.controls['username'].setValue('admin');
    component.loginForm.controls['password'].setValue('');
    fixture.detectChanges();
    expect(component.loginForm.invalid).toEqual(true);
  });

  it('form submit create token', () => {
    component.loginForm.controls['username'].setValue('admin');
    component.loginForm.controls['password'].setValue('peru2018');
    fixture.detectChanges();
    component.onSubmit();
    const token = localStorage.getItem('sessionToken');
    expect(token).not.toBeUndefined(token);
  });

});
