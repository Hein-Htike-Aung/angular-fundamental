import { ClassComponent } from './class/class.component';
import { CourseComponent } from './course/course.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'course', component: CourseComponent },
  { path: 'class', component: ClassComponent },
  { path: '', redirectTo: '/master/course', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasterRoutingModule {}
