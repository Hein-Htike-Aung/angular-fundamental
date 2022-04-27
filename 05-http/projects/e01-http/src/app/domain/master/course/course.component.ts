import { ModalDialogComponent } from './../../../common/app-common/widget/modal-dialog/modal-dialog.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  Course,
  CourseLevel,
} from '../../../common/app-service/model/app.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseService } from '../../../common/app-service/service/course.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styles: [],
})
export class CourseComponent {
  form: FormGroup;
  searchForm: FormGroup;
  modalDialogTitle?: string;
  courses: Course[] = [];
  courseLevel: string[] = [];

  @ViewChild(ModalDialogComponent)
  modalDialog?: ModalDialogComponent;

  constructor(private builder: FormBuilder, private service: CourseService) {
    this.form = this.builder.group({
      objectId: '',
      name: ['', Validators.required],
      level: ['', Validators.required],
      duration: ['', [Validators.required, Validators.min(10)]],
      fees: '',
    });

    this.searchForm = this.builder.group({
      name: '',
    });

    this.courseLevel = Object.values(CourseLevel);

    this.service.getAll().subscribe((data) => (this.courses = data));

    this.searchForm.get('name')?.valueChanges.subscribe((value) => {
      if (value) {
        this.courses = this.courses.filter((c) =>
          c.name.toLowerCase().startsWith(value.toLowerCase())
        );
      } else {
        this.service.getAll().subscribe((data) => (this.courses = data));
      }
    });
  }

  addNew() {
    this.modalDialogTitle = 'Add New Course';
    this.form.reset();
    this.form.get('level')?.setValue('');
    this.modalDialog?.open();
  }

  save(valid: any) {
    if (valid) {
      const course: Course = this.form.value;
      // Check Duplication
      if (!course.objectId) {
        const duplicatedCourse = this.courses.filter(
          (c) => c.name.toLowerCase() === course.name.toLowerCase()
        );

        if (duplicatedCourse.length == 0) {
          this.saveCourse();
        }
      } else {
        this.saveCourse();
      }
    }
  }

  saveCourse() {
    this.service
      .save(this.form.value)
      .subscribe((data) => (this.courses = data));

    this.modalDialog?.close();
  }

  edit(id: string | undefined) {
    this.service.findById(id!).subscribe((data) => {
      if (data) {
        this.form.patchValue(data);
        this.modalDialogTitle = 'Edit Course';
        this.modalDialog?.open();
      }
    });
  }

  delete(id: string | undefined) {
    //TODO
    console.log(id);
  }
}
