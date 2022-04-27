import { ReactiveFormsModule } from '@angular/forms';
import { AppCommonModule } from './../../common/app-common/app-common.module';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { CourseComponent } from './course/course.component';
import { ClassComponent } from './class/class.component';


@NgModule({
  declarations: [
  
    CourseComponent,
       ClassComponent
  ],
  imports: [
    CommonModule,
    MasterRoutingModule,
    ReactiveFormsModule,
    AppCommonModule,
  ],
  providers: [
    DatePipe
  ]
})
export class MasterModule { }
