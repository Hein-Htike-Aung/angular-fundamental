import { AbstractControl, ValidatorFn } from '@angular/forms';
import { of } from 'rxjs';

export class AppValidators {
  static phoneValidator: ValidatorFn = (control: AbstractControl) => {
    let regex = new RegExp(`^09([- ' ']\\d{4}){2}$`);
    if (!regex.test(control.value)) {
      return {
        phone: 'Phone Number format is incorrect',
      };
    }
    return null;
  };

  static is_trueValidator: ValidatorFn = (control: AbstractControl) => {
    if (!control.value) {
      return {
        falseValue: 'Please confirm',
      };
    }

    return null;
  };

  static is_trueValidatorInMultiCheckBox: ValidatorFn = (control: AbstractControl) => {    

    for(let value of Object.values(control.value)) {
      if(value) {
        return null;        
      }
    }
    return {
      falseValue: 'Choose One'
    }
  }
}
