import { FormGroup, FormControl } from '@angular/forms';
import {
  FormArray,
  AbstractControl,
} from '@angular/forms';

interface ControlUnit {
  controlName?: string;
  groupName?: string;
  control?: AbstractControl | null;
}

export class ReactiveFormHelper {
  form!: FormGroup;

  getFormControl(controlName: string, groupName: string = ''): FormControl {
    if (groupName) {
      return this.form.get(groupName)?.get(controlName) as FormControl;
    }

    return this.form.get(controlName) as FormControl;
  }

  getFormControlFromFormArray(
    formArray: FormArray,
    index: number,
    controlName: string
  ): FormControl {
    return formArray.at(index).get(controlName) as FormControl;
  }

  resetFormArray(formArray: FormArray) {
    for (let i = formArray.length; i > 0; i--) {
      formArray.removeAt(i);
    }
  }

  showError(controlUnit: ControlUnit): boolean {

    let control:AbstractControl | null | undefined;

    if (controlUnit.groupName != null && controlUnit.controlName != null) {
     control = this.getFormControl(controlUnit.controlName, controlUnit.groupName);      

    } else if (controlUnit.controlName != null) {
     control = this.getFormControl(controlUnit.controlName);     

    } else {
     control = controlUnit.control;
    }
    return control!['invalid'] && (control!['dirty'] || control!['touched']);
  }
}
