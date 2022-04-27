import { AbstractControl, ValidatorFn } from "@angular/forms";

export class AppValidators {
    static isCategoryDuplicated: ValidatorFn = (control: AbstractControl) => {

        console.log(control.value);

        return null;
    }
}