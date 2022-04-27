import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, Subject } from 'rxjs';
import { ApiBatchClient } from '../client/api-batch.client';
import { BatchRequestsBody, Class, Pointer, Teacher } from '../model/app.model';
import { ApiClient } from './../client/api.client';
import { DAYS, Course } from './../model/app.model';
import { CourseService } from './course.service';
import { TeacherService } from './teacher.service';
import { CoursesComponent } from '../../../domain/master/courses/courses.component';

const API = 'classes/Class';

@Injectable({
  providedIn: 'root',
})
export class ClassService {
  private apiClient: ApiClient;

  constructor(
    private httpClient: HttpClient,
    private apiBatchClient: ApiBatchClient
  ) {
    this.apiClient = new ApiClient(this.httpClient, API);
  }

  save(param_class: Class | any): Observable<any> {
    const { course, teacher, ..._class } = param_class;
    const targetClassObject = {
      ..._class,
      course: new Pointer('Course', course),
      teacher: new Pointer('Teacher', teacher),
      startDate: {
        __type: 'Date',
        iso: new Date(_class.startDate),
      },
    };

    if (param_class.objectId) {
      // Edit
      return this.apiClient.put(param_class.objectId, targetClassObject);
    } else {
      // Save
      return this.apiClient.post(targetClassObject);
    }
  }

  findById(id: string): Observable<Class> {
    return this.apiClient.findById(id, {
      include: JSON.stringify(['teacher', 'course']),
    });
  }

  search(form: {
    teacher?: string;
    course?: string;
    dateFrom?: string;
    dateTo?: string;
  }) {
    const where: any = {};

    // Teacher
    if (form.teacher) {
      where['teacher'] = new Pointer('Teacher', form.teacher);
    }
    // Course
    if (form.course) {
      where['course'] = new Pointer('Course', form.course);
    }

    const startDate: any[] = [];
    // Date From
    if (form.dateFrom) {
      startDate.push({
        startDate: {
          $gte: {
            __type: 'Date',
            iso: new Date(form.dateFrom),
          },
        },
      });
    }
    // Date To
    if (form.dateTo) {
      startDate.push({
        startDate: {
          $lte: {
            __type: 'Date',
            iso: new Date(form.dateTo),
          },
        },
      });
    }

    if (startDate.length > 0) {
      where['$and'] = startDate;
    }

    return this.apiClient
      .get({
        include: JSON.stringify(['teacher', 'course']),
        where: JSON.stringify(where),
      })
      .pipe(
        map((resp) => resp.results),
        // Transform Date
        map((classes) => {
          const classesArr: any[] = classes;
          return classesArr.map((c) => {
            return { ...c, startDate: c.startDate.iso };
          });
        })
      );
  }

  uploadClasses(courseId: string, teacherId: string, file: any) {
    const subject = new Subject<boolean>();

    if (file != null) {
      const reader = new FileReader();

      reader.readAsText(file);

      reader.onload = (event) => {
        const result: any = event.target?.result;

        if (result) {
          // crop by Line
          const lines: string[] = result.split('\n');

          const resources = lines
            // crop by Tab
            .map((line) => line.split('\t'))
            .filter((columns) => columns.length == 4)
            .map((column) => {
              return {
                teacher: new Pointer('Teacher', teacherId),
                course: new Pointer('Course', courseId),
                startDate: {
                  __type: 'Date',
                  iso: new Date(column[0]),
                },
                period: {
                  startTime: column[1],
                  endTime: column[2],
                },
                days: this.transformDate(column[3]),
              };
            });

          // Transform resources into Batch Request Body
          const targetObjects = resources.map((resource) => {
            return new BatchRequestsBody(API, resource);
          });

          this.apiBatchClient.post(targetObjects).subscribe((_) => {
            // return Observable<boolean> after Uploaded
            subject.next(true);
          });
        }
      };
    } else {
      // return Observable<boolean>
      subject.next(false);
    }

    return subject;
  }

  transformDate(days: string) {
    const targetDays: string[] = days.split(',').map((day) => day.trim());
    const daysArray: (boolean | null)[] = [];

    DAYS.forEach((d) => {
      let pushed = false;

      targetDays.forEach((targetDay) => {
        // Remove \r
        if (targetDay.endsWith('\r')) {
          targetDay = targetDay.replace('\r', '');
        }
        if (targetDay === d) {
          daysArray.push(true);
          pushed = true;
        }
      });

      if (!pushed) {
        daysArray.push(null);
      }
    });

    return daysArray;
  }
}
