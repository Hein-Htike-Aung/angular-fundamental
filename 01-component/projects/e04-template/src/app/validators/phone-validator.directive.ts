import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  Validators,
} from '@angular/forms';

@Directive({
  selector: '[phoneValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PhoneValidatorDirective,
      multi: true,
    },
  ],
})
export class PhoneValidatorDirective implements Validator {
  constructor() {}

  validate(control: AbstractControl): ValidationErrors | null {
    
    const value:string = control.value;
    let regex = new RegExp(`^09([- ' ']\\d{4}){2}`);

    if (!regex.test(value)) {
      return {
        phone: true,
      };
    }
   
    return null;
  }
}
