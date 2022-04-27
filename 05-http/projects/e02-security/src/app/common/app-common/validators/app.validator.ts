import { AbstractControl, ValidationErrors } from '@angular/forms';

export class AppValidator {
  /* Compare Two Different Times */
  static validateClassTime(control: AbstractControl): ValidationErrors | null {
    const period: { startTime: string; endTime: string } = control.value;

    if (period.startTime && period.endTime) {
      if (period.startTime.localeCompare(period.endTime) >= 0) {
        return {
          error: 'End Time must be greater than start Time',
        };
      }
    }

    return null;
  }

  /* Check If it has One True in Array */
  static validateClassDays(control: AbstractControl): ValidationErrors | null {
    const days: boolean[] = control.value;

    for (let day of days) {
      if (day) {
        return null;
      }
    }

    return {
      error: 'Select at least One Day',
    };
  }
}
