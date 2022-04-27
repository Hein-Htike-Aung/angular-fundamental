import { ReactiveFormHelper } from './reactive-form-helper';
import { AppValidators } from './../validators/app-validators';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form-validation',
  templateUrl: './reactive-form-validation.component.html',
  styles: [],
})
export class ReactiveFormValidationComponent extends ReactiveFormHelper {
  interests = [
    { id: 1, name: 'javascript' },
    { id: 2, name: 'typescript' },
    { id: 3, name: 'angular' },
  ];

  subjects = ['web', 'mobile', 'backend', 'frontend'];

  constructor(private builder: FormBuilder) {
    super();

    this.form = builder.group({
      name: ['', Validators.required],
      contact: builder.group({
        phone: ['', [Validators.required, AppValidators.phoneValidator]],
        email: ['', [Validators.required, Validators.email]],
      }),
      interest: ['', Validators.required],
      type: [false, [AppValidators.is_trueValidator]],
      gender: ['', Validators.required],
      courses: builder.group({},
        { validators: AppValidators.is_trueValidatorInMultiCheckBox }
      ),
      hobbies: builder.array([]),
      properties: builder.array([]),
    });

    this.addControlsForCourses();
    this.addHobby();
    this.addProperty();
  }

  save() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.reset();
    } else {
      // Trigger All the Validations if form is invalid
      for (var i in this.form.controls) {
        this.form.controls[i].markAllAsTouched();
      }
    }

  }

  reset() {
    this.form.reset({
      interest: '',
    });
    this.resetFormArray(this.hobbies);
    this.resetFormArray(this.properties);
  }

  addControlsForCourses() {
    let gp = this.form.get('courses') as FormGroup;
    this.subjects.forEach((subject) =>
      gp.setControl(subject, new FormControl(false))
    );
  }

  addHobby() {
    this.hobbies.push(this.builder.control('', Validators.required));
  }

  addProperty() {
    this.properties.push(
      this.builder.group({
        key: ['', Validators.required],
        value: ['', Validators.required],
      })
    );
  }

  deleteHobby(index: number) {
    this.hobbies.length > 1 ? this.hobbies.removeAt(index) : '';
  }

  deleteProperty(index: number) {
    this.properties.length > 1 ? this.properties.removeAt(index) : '';
  }

  get hobbies(): FormArray {
    return this.form.get('hobbies') as FormArray;
  }

  get properties(): FormArray {
    return this.form.get('properties') as FormArray;
  }

  getErrorMessageForProperties (index:number) {
    let controlForKey = this.getFormControlFromFormArray(this.properties, index, 'key');
    let controlForValue = this.getFormControlFromFormArray(this.properties, index, 'value');
    let errorMessage = '';

    if(controlForKey.errors != null && controlForValue.errors != null) {
      errorMessage = 'Please Enter Property Value';
    }
    else if(controlForKey.errors != null){
      errorMessage = 'Please Enter Key';
    }
    else if(controlForValue.errors != null){
      errorMessage = 'Please Enter Value';
    }

    return errorMessage;
  }
}
