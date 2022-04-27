import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalDialogComponent } from '../../../common/app-common/widgets/modal-dialog/modal-dialog.component';
import { Teacher } from '../../../common/app-service/model/app.model';
import { TeacherService } from '../../../common/app-service/services/teacher.service';
import { UserService } from './../../../common/app-service/services/user.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styles: [],
})
export class TeachersComponent {
  modalTitle = '';
  form: FormGroup;
  searchForm: FormGroup;
  teacherList: Teacher[] = [];

  @ViewChild(ModalDialogComponent)
  modalDialog?: ModalDialogComponent;

  constructor(
    private builder: FormBuilder,
    private teacherService: TeacherService,
    private userService: UserService
  ) {
    this.form = this.builder.group({
      objectId: '',
      name: ['', Validators.required],
      phone: ['', Validators.required],
      user: this.builder.group({
        objectId: '',
        email: ['', [Validators.required, Validators.email]],
        username: ['', Validators.required],
      }),
    });

    this.searchForm = this.builder.group({
      name: '',
      phone: '',
    });

    this.search();
  }

  addNew() {
    this.modalTitle = 'Add New Teacher';
    this.form.reset();
    this.modalDialog?.open();
  }

  edit(teacherId: string) {
    // Find Teacher By Id
    this.teacherService.findById(teacherId).subscribe((teacher) => {
      // Find User by Id
      this.userService.findById(teacher.user.objectId).subscribe((user) => {
        this.form.patchValue({
          ...teacher,
          user: { email: teacher.email, ...user },
        });
        this.modalTitle = 'Edit Teacher';
        this.modalDialog?.open();
      });
    });
  }

  save(valid: any) {
    if (valid) {
      this.teacherService.save(this.form.value).subscribe((_) => {
        this.search();
        this.modalDialog?.close();
      });
    }
  }

  search() {
    this.teacherService.search(this.searchForm.value).subscribe((resp) => {
      this.teacherList = resp;
    });
  }

  searchAll() {
    this.teacherService.search({}).subscribe((resp) => {
      this.searchForm.reset();
      this.teacherList = resp;
    });
  }
}
