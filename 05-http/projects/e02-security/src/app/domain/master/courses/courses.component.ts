import { CourseService } from './../../../common/app-service/services/course.service';

import { LEVEL, Course } from './../../../common/app-service/model/app.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDialogComponent } from '../../../common/app-common/widgets/modal-dialog/modal-dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styles: [],
})
export class CoursesComponent {
  form: FormGroup;
  searchForm: FormGroup;
  courseLevel: string[];
  courses: Course[] = [];
  modalTitle = '';
  @ViewChild(ModalDialogComponent)
  courseModalDialog?: ModalDialogComponent;

  constructor(
    private builder: FormBuilder,
    private courseService: CourseService
  ) {
    this.form = this.builder.group({
      objectId: '',
      name: ['', Validators.required],
      level: ['', Validators.required],
      duration: ['', [Validators.required, Validators.min(10)]],
      fees: ['', Validators.required],
    });

    this.searchForm = this.builder.group({
      name: '',
      level: '',
    });

    this.courseLevel = Object.values(LEVEL);

    this.searchAll();
  }

  addNew() {
    this.form.reset();
    this.form.get('level')?.setValue('');
    this.modalTitle = 'Add New Course';
    this.courseModalDialog?.open();
  }

  save(valid: any) {
    if (valid) {
      this.courseService.save(this.form.value).subscribe((_) => {
        this.search();
      });
      this.courseModalDialog?.close();
    }
  }

  edit(id: string) {
    this.courseService.findById(id).subscribe((course) => {
      this.form.patchValue(course);
      this.modalTitle = 'Edit Course';
      this.courseModalDialog?.open();
    });
  }

  search() {
    this.courseService.search(this.searchForm.value).subscribe((courses) => {
      this.courses = courses;
    });
  }

  searchAll() {
    this.courseService.search({}).subscribe((courses) => {
      this.courses = courses;
      this.searchForm.reset();
      this.searchForm.get('level')?.setValue('');
    });
  }
}
