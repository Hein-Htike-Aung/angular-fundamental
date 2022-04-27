
import { CourseService } from './../../../common/app-service/services/course.service';
import { Component, OnInit } from '@angular/core';
import { ClassService } from '../../../common/app-service/services/class.service';
import { Class, Course } from '../../../common/app-service/model/app.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent  {

  courses: Course[] = [];
  classes: Class[] = [];

  constructor(
    private courseService: CourseService,
    private classService: ClassService
  ) { 

    this.courseService.search({}).subscribe(resp => this.courses = resp);
    this.searchAllClass();
  }

  searchClassByCourseId(courseId: string) {
    this.classService.search({course: courseId}).subscribe(resp => this.classes = resp);
  }

  searchAllClass() {
    this.classService.search({}).subscribe(resp => this.classes = resp);
  }

}
