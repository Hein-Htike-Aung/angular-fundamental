import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassesComponent } from '../../domain/master/classes/classes.component';
import { CoursesComponent } from '../../domain/master/courses/courses.component';
import { TeachersComponent } from '../../domain/master/teachers/teachers.component';
import { AdminGuard } from '../../domain/security/guards/admin.guard';
import { TeacherGuard } from '../../domain/security/guards/teacher.guard';
import { HomeComponent } from './../public/home/home.component';
import { TeacherComponent } from './teacher.component';
const routes: Routes = [
  {
    path: '',
    component: TeacherComponent,
    children: [
      { path: 'home', component: HomeComponent },
      {
        path: 'teachers',
        canActivate: [AdminGuard],
        component: TeachersComponent,
      },
      {
        path: 'courses',
        canActivate: [TeacherGuard],
        component: CoursesComponent,
      },
      {
        path: 'classes',
        canActivate: [TeacherGuard],
        component: ClassesComponent,
      },
      { path: '', redirectTo: '/teacher/home', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherRoutingModule {}
