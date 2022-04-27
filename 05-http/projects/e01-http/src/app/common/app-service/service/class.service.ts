import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'projects/e01-http/src/environments/environment';
import { AppClient } from '../client/api.client';
import { Class } from '../model/app.model';

const API = `${environment.api.url}/classes/Class`;

@Injectable({
  providedIn: 'root',
})
export class ClassService {
  private appClient: AppClient;

  private dateConvector = (data: any) => {
    const { startDate, ...others } = data;
    others['startDate'] = startDate.iso;
    return others;
  };

  constructor(private httpClient: HttpClient) {
    this.appClient = new AppClient(this.httpClient, API);
  }

  save(value: any): Observable<boolean> {
    const { course, startDate, ..._class } = value;

    _class['course'] = {
      __type: 'Pointer',
      className: 'Course',
      objectId: course,
    };

    _class['startDate'] = {
      __type: 'Date',
      iso: new Date(startDate),
    };

    const resp = _class.objectId
      ? this.appClient.update(_class)
      : this.appClient.create(_class);

    // Return boolean based on create status
    return resp.pipe(map((data) => !data.error));
  }

  findById(id: string): Observable<Class> {
    return this.appClient
      .findById(id, { include: 'course' })
      .pipe(map((data) => this.dateConvector(data)));
  }

  search(form: any): Observable<Class[]> {
    const where: any = {};

    /* Text Search */
    if (form.teacher) {
      where['teacher'] = { $regex: `^${form.teacher}` };

      // where['teacher'] = {
      //   $text: {
      //     $search: {
      //       $term: `${form.teacher}`,
      //     },
      //   },
      // };
    }

    /* Pointer Search */
    if (form.course) {
      where['course'] = {
        __type: 'Pointer',
        className: 'Course',
        objectId: form.course,
      };
    }

    /* Date Search */
    const startDate: any[] = [];
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

    return this.appClient
      .getAll({ include: 'course', where: JSON.stringify(where) })
      .pipe(
        map((resp) => resp.results),
        map((classes) => {
          const classArr: any[] = classes;
          return classArr.map((c) => this.dateConvector(c));
        })
      );
  }
}
