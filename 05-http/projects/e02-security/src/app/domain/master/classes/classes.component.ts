import { DatePipe } from '@angular/common';
import { ModalDialogComponent } from './../../../common/app-common/widgets/modal-dialog/modal-dialog.component';

import { Teacher, Course } from './../../../common/app-service/model/app.model';

import { CourseService } from './../../../common/app-service/services/course.service';
import { TeacherService } from './../../../common/app-service/services/teacher.service';
import {
  FormGroup,
  FormBuilder,
  FormArray,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ClassService } from '../../../common/app-service/services/class.service';
import { Class } from '../../../common/app-service/model/app.model';
import { AppValidator } from '../../../common/app-common/validators/app.validator';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styles: [],
})
export class ClassesComponent {
  form: FormGroup;
  searchForm: FormGroup;
  classes: Class[] = [];
  teachers: Teacher[] = [];
  courses: Course[] = [];

  @ViewChild('uploadFileInput')
  fileInput: any;

  @ViewChild(ModalDialogComponent)
  classModalDialog?: ModalDialogComponent;
  modalDialogTitle = '';

  constructor(
    private builder: FormBuilder,
    private classService: ClassService,
    private teacherService: TeacherService,
    private courseService: CourseService,
    private datePipe: DatePipe
  ) {
    this.form = this.builder.group({
      objectId: '',
      teacher: ['', Validators.required],
      course: ['', Validators.required],
      startDate: ['', Validators.required],
      days: this.builder.array(
        [false, false, false, false, false, false, false],
        { validators: [AppValidator.validateClassDays] }
      ),
      period: this.builder.group(
        {
          startTime: ['', Validators.required],
          endTime: ['', Validators.required],
        },
        { validators: [AppValidator.validateClassTime] }
      ),
    });

    this.searchForm = this.builder.group({
      teacher: '',
      course: '',
      dateFrom: '',
      dateTo: '',
    });

    this.teacherService
      .search({})
      .subscribe((teachers) => (this.teachers = teachers));
    this.courseService
      .search({})
      .subscribe((courses) => (this.courses = courses));

    this.searchAll();
  }

  showError(control: AbstractControl | null) {
    return control?.invalid && (control.dirty || control.touched);
  }

  getDays(): FormArray {
    return this.form.get('days') as FormArray;
  }

  addNew() {
    this.form.reset();
    this.form.get('teacher')?.setValue('');
    this.form.get('course')?.setValue('');
    this.modalDialogTitle = 'Add New Class';
    this.classModalDialog?.open();
  }

  save(valid: any) {
    if (valid) {
      this.classService.save(this.form.value).subscribe((_) => {
        this.searchAll();
        this.classModalDialog?.close();
      });
    }
  }

  edit(id: string) {
    this.classService.findById(id).subscribe((resp_class) => {
      // Transform Response Object
      this.form.patchValue(this.transformIntoViewObject(resp_class));

      this.modalDialogTitle = 'Edit Class';
      this.classModalDialog?.open();
    });
  }

  transformIntoViewObject(resp_class: any) {
    const startDate: any = resp_class.startDate;
    return {
      ...resp_class,
      course: resp_class.course.objectId,
      teacher: resp_class.teacher.objectId,
      startDate: this.datePipe.transform(startDate['iso'], 'yyyy-MM-dd'),
    };
  }

  search() {
    this.classService
      .search(this.searchForm.value)
      .subscribe((classes) => (this.classes = classes));
  }

  searchAll() {
    this.classService.search({}).subscribe((classes) => {
      this.classes = classes;
      this.searchForm.reset();
      this.searchForm.get('teacher')?.setValue('');
      this.searchForm.get('course')?.setValue('');
    });
  }

  /* Upload */
  canUpload(): boolean {
    return this.searchForm.value.teacher && this.searchForm.value.course;
  }

  uploadClick() {
    if (!this.searchForm.value.teacher || !this.searchForm.value.course) {
      // Trigger Error
      this.searchForm.setErrors({ error: 'Select Teacher & Course' });
    } else {
      // Trigger File Input
      this.fileInput?.nativeElement.click();
    }
  }

  uploadFile(event: any) {
    const file = event.target.files[0];

    this.classService
      .uploadClasses(
        this.searchForm.value.course,
        this.searchForm.value.teacher,
        file
      )
      .subscribe((success) => {
        console.log(success);
        if (success) {
          this.searchAll();
        }
      });
  }
}
