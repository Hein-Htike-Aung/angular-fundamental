import { Student } from './../student.service';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styles: [],
})
export class StudentEditComponent {
  form: FormGroup;

  @Input()
  set studentInput(student: Student) {
    console.log('Set Value to Child Component');
    this.form.patchValue(student);
  }

  @Output()
  onSave = new EventEmitter();

  constructor(private builder: FormBuilder) {
    this.form = this.builder.group({
      id: 0,
      name: '',
      phone: '',
      email: '',
      subject: '',
    });
  }

  save() {
    this.onSave.emit(this.form.value);
  }

  closeModal() {
    $('#student-modal').css('display', 'none');
  }

}
