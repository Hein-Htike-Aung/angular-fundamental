import { DatePipe } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalDialogComponent } from '../../../common/app-common/widget/modal-dialog/modal-dialog.component';
import { ClassService } from '../../../common/app-service/service/class.service';
import { Class, Course } from './../../../common/app-service/model/app.model';
import { CourseService } from './../../../common/app-service/service/course.service';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styles: [],
})
export class ClassComponent {
  courses: Course[] = [];
  classes: Class[] = [];
  form: FormGroup;
  searchForm: FormGroup;
  modalDialogTitle = '';

  @ViewChild(ModalDialogComponent)
  modalDialog?: ModalDialogComponent;

  constructor(
    private service: ClassService,
    private courseService: CourseService,
    private datePipe: DatePipe,
    private builder: FormBuilder
  ) {
    this.form = this.builder.group({
      objectId: '',
      startDate: ['', Validators.required],
      days: this.builder.array([
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ]),
      teacher: ['', Validators.required],
      course: ['', Validators.required],
    });

    this.searchForm = this.builder.group({
      course: '',
      teacher: '',
      dateFrom: '',
      dateTo: '',
    });

    this.courseService.getAll().subscribe((data) => (this.courses = data));

    this.search();
  }

  search() {
    this.service
      .search(this.searchForm.value)
      .subscribe((data) => (this.classes = data));
  }

  searchAll() {
    this.service.search({}).subscribe((data) => (this.classes = data));
    this.searchForm.reset();
    this.searchForm.get('course')?.setValue('');
  }

  save(valid: any) {
    if (valid) {
      this.service.save(this.form.value).subscribe((success) => {
        if (success) {
          this.search();
          this.modalDialog?.close();
        }
      });
    }
  }

  edit(id: string | undefined) {
    if (id) {
      this.service.findById(id).subscribe((data) => {
        // Change Object Structure
        const { course, startDate, ..._class } = data;
        const targetObj = {
          ..._class,
          course: course.objectId,
          startDate: this.datePipe.transform(new Date(startDate), 'yyyy-MM-dd'),
        };

        this.form.patchValue(targetObj);
      });

      this.modalDialogTitle = 'Edit Class';
      this.modalDialog?.open();
    }
  }

  addNew() {
    this.modalDialogTitle = 'Add New Class';
    this.form.reset();
    this.form.get('course')?.setValue('');
    this.modalDialog?.open();
  }

  get days(): FormArray {
    return this.form.get('days') as FormArray;
  }
}
