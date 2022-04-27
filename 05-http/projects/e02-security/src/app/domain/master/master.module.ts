import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TeachersComponent } from './teachers/teachers.component';
import { CoursesComponent } from './courses/courses.component';
import { ClassesComponent } from './classes/classes.component';
import { AppCommonModule } from '../../common/app-common/app-common.module';



@NgModule({
  declarations: [
    TeachersComponent,
    CoursesComponent,
    ClassesComponent
  ],
  imports: [
    CommonModule,
    AppCommonModule,
    ReactiveFormsModule
  ],
  providers: [
    DatePipe
  ]
})
export class MasterModule { }
