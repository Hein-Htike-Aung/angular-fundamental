import {  StudentInterface, StudentModel } from './student.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
})
export class SimpleFormComponent {
  student: StudentInterface;

  constructor(private studentModel: StudentModel) {
    this.student = this.studentModel.newStudent();
  }

  getInterests(): string[] {
    return Object.keys(this.student.interest);
  }

  addStudent() {
    this.studentModel.addStudent({ ...this.student });
    this.student = this.studentModel.newStudent();
  }

  getAllStudent() {
    return this.studentModel.getAllStudent();
  }

  getInterest(student: StudentInterface) {
    let arr: string[] = [];

    Object.keys(student.interest).forEach((key) => {
      if (student.interest[key] === true) {
        arr.push(key);
      }
    });

    return arr.join(', ');
  }

  editStudent(student: StudentInterface) {
    this.student = this.studentModel.getById(student.id);
    console.log(this.student);
  }
}
