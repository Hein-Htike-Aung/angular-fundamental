import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styles: [],
})
export class ReactiveFormComponent {
  form: FormGroup;

  subjects = [
    { id: 1, name: 'javascript' },
    { id: 2, name: 'typescript' },
    { id: 3, name: 'angular' },
  ];

  technologies = ['web', 'mobile', 'backend', 'frontend'];

  constructor(private builder: FormBuilder) {
    this.form = builder.group(
      {
        name: '',
        contact: builder.group({
          phone: '',
          email: '',
        }),
        type: false,
        interest: '',
        gender: '',
        courses: builder.group({
          web: false,
          mobile: false,
          backend: false,
          frontend: false,
        }),
        hobbies: builder.array([]),
        properties: builder.array([]),
      },
      { updateOn: 'blur' }
    );

    this.addHobby();
    this.addProperty();
  }

  get hobbies(): FormArray {
    return this.form.get('hobbies') as FormArray;
  }

  get properties(): FormArray {
    return this.form.get('properties') as FormArray;
  }

  addHobby() {
    this.hobbies.push(this.builder.control('', Validators.required));
  }

  addProperty() {
    this.properties.push(
      this.builder.group({
        key: '',
        value: '',
      })
    );
  }

  deleteHobby(index: number) {
    this.hobbies.length > 1 ? this.hobbies.removeAt(index) : '';
  }

  deleteProperty(index: number) {
    this.properties.length > 1 ? this.properties.removeAt(index) : '';
  }

  save() {
    console.log(this.form.value);
    this.reset();
  }

  reset() {
    this.form.reset({
      interest: ''
    });
    
    this.resetFormArray(this.hobbies);
    this.resetFormArray(this.properties);
  }


  resetFormArray(formArray: FormArray) {
    for(let i = formArray.length; i > 0 ;i --) {
      formArray.removeAt(i);
    }
  }


}
