import { StudentModel } from './template-form/student.model';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {

  constructor(private studentModel: StudentModel) {}

  ngOnInit(): void {
    this.studentModel.reloadFromLocalStorage();
  }

}
