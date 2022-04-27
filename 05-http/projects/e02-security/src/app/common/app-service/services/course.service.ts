import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiClient } from '../client/api.client';
import { Course } from '../model/app.model';

const API = 'classes/Course';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private apiClient: ApiClient;

  constructor(private httpClient: HttpClient) {
    this.apiClient = new ApiClient(this.httpClient, API);
  }

  save(course: Course): Observable<string> {
    return course.objectId
      ? this.apiClient
          .put(course.objectId, course)
          .pipe(map((resp) => resp.objectId))
      : this.apiClient.post(course).pipe(map((resp) => resp.objectId));
  }

  search(form: { name?: string; level?: string }): Observable<any> {
    const where: any = {};

    if (form.name) {
      where['name'] = { $regex: `^${form.name}` };
    }

    if (form.level) {
      where['level'] = form.level;
    }

    return this.apiClient
      .get({ where: JSON.stringify(where) })
      .pipe(map((courses) => courses.results));
  }

  findById(courseId: string): Observable<Course> {
    return this.apiClient.findById(courseId);
  }
}
