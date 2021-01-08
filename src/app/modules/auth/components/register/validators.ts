import { FormGroup, AbstractControl } from '@angular/forms';


export class RegisterValidators {

  static uniqueUserName(control: AbstractControl) {
    const USER = ['neotrons', 'jcramiez', 'admin'];
    return !USER.includes(control.value) ? null: {"uniqueUserError": true}
  }

  static passwordMatchValidator(group: FormGroup) {
    const password = group.get('password').value;
    const confirmPassword = group.get('confirmPassword').value;
    return password === confirmPassword ? null : {'misMatch': true}
  }
}