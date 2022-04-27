import { RouterModule } from '@angular/router';
import { TeacherComponent } from './teacher.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TeacherRoutingModule } from './teacher-routing.module';
import { MasterModule } from '../../domain/master/master.module';
import { AppCommonModule } from '../../common/app-common/app-common.module';



@NgModule({
  declarations: [
    TeacherComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    ReactiveFormsModule,
    MasterModule,
    RouterModule,
  ]
})
export class TeacherModule { }
