import { HttpClient } from '@angular/common/http';
import { Course } from './../model/app.model';
import { AppClient } from '../client/api.client';
import { Injectable } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';
import { environment } from 'projects/e01-http/src/environments/environment';

const API = `${environment.api.url}/classes/Course`;

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private appClient: AppClient;

  constructor(private httpClient: HttpClient) { 
    this.appClient = new AppClient(this.httpClient, API);
  }

  getAll():Observable<Course[]> {
    return this.appClient.getAll().pipe(
      map(resp => resp.results)
    );
  }

  save(course: Course):Observable<Course[]> {
    const resp = course.objectId ? this.appClient.update(course) : this.appClient.create(course);

    // Find All Courses
    return resp.pipe(
      switchMap(_ => this.getAll())
    )
  }

  findById(objectId: string): Observable<Course> {
    return this.appClient.findById(objectId);

  }

}
