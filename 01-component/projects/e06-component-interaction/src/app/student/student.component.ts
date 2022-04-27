import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Student, StudentService } from './student.service';

declare var $:any;

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styles: [],
})
export class StudentComponent {
  students: Student[] = [];

  student!: Student;

  searchForm: FormGroup;

  constructor(
    private builder: FormBuilder,
    private service: StudentService
  ) {

      this.searchForm = this.builder.group({
      name:''
    })


    this.getAllStudnet();

    this.searchForm.get('name')?.valueChanges.subscribe(name => {
      this.students = this.service.searchByName(name);
    })

  }
  
  add() {
    // send value to Child
    this.student = {
      id: 0,
      name: '',
      phone: '',
      email: '',
      subject: '',
    };
    // show modal
    $('#student-modal').css('display', 'block');
  }

  edit(editStudent: Student) {
    // send value to Child
    this.student = editStudent;
    // show modal
    $('#student-modal').css('display', 'block');
  }

  save(student: Student) {
    // receive valud from Chiild
    this.service.add(student);
    // hide modal
    $('#student-modal').css('display', 'none');
    this.getAllStudnet();
  }

  delete(student: Student) {
    this.service.deleteStudent(student);
    this.getAllStudnet();
  }

  getAllStudnet() {
    this.students = this.service.getAllStudents();
  }
}
