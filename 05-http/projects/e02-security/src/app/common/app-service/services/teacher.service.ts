import { ApiClient } from './../client/api.client';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Teacher } from '../model/app.model';
import { map, Observable, switchMap } from 'rxjs';
import { UserService } from './user.service';
import { RoleService } from './role.service';

const API = 'classes/Teacher';

@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  private apiClient: ApiClient;

  constructor(
    private httpClient: HttpClient,
    private userService: UserService,
    private roleService: RoleService
  ) {
    this.apiClient = new ApiClient(this.httpClient, API);
  }

  save(teacher: Teacher) {
    return teacher.objectId ? this.update(teacher) : this.create(teacher);
  }

  private create(teacher: Teacher) {
    const { user, ..._teacher } = teacher;

    // Create User
    return this.userService.create({ ...user, password: user.username }).pipe(
      // Attach User with Role by using createdUserObjectId
      switchMap((createdUserObjectId) =>
        this.roleService.attachUserWithRole('TEACHER', createdUserObjectId)
      ),
      // Create Teacher With createdUserObjectId
      switchMap((userId) =>
        this.apiClient.post({
          ..._teacher,
          // Set User's Email to Teacher's
          email: user.email,
          user: {
            __type: 'Pointer',
            className: '_User',
            objectId: userId,
          },
        })
      )
    );
  }

  private update(teacher: Teacher): Observable<string> {
    const { user, ..._teacher } = teacher;
    return this.apiClient.put(_teacher.objectId, {
      ..._teacher,
      email: user.email,
      user: {
        __type: 'Pointer',
        className: '_User',
        objectId: user.objectId,
      },
    });
  }

  search(form: { name?: string; phone?: string }): Observable<Teacher[]> {
    const where: any = {};

    if (form.name) {
      where['name'] = { $regex: `^${form.name}` };
    }

    if (form.phone) {
      where['phone'] = { $regex: `^${form.phone}` };
    }

    return this.apiClient
      .get({ where: JSON.stringify(where), include: 'user' })
      .pipe(map((resp) => resp.results));
  }

  findById(id: string) {
    return this.apiClient.findById(id);
  }
}
