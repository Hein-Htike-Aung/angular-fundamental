import { map, Observable, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiClient } from './../client/api.client';
import { Injectable } from '@angular/core';
import { Role } from '../model/app.model';

const API = 'roles';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  private apiClient: ApiClient;

  constructor(private httpClient: HttpClient) {
    this.apiClient = new ApiClient(this.httpClient, API);
  }

  getUserRole(userId: string): Observable<any> {
    const where = {
      users: {
        __type: 'Pointer',
        classname: '_User',
        objectId: userId,
      },
    };

    return this.apiClient
      .get({ where: JSON.stringify(where) })
      .pipe(map((resp) => resp.results[0]));
  }

  getAllRoles(): Observable<Role[]> {
    return this.apiClient.get().pipe(map((resp) => resp.results));
  }

  getRole(roleName: string): Observable<Role> {
    return this.getAllRoles().pipe(
      map((roles) => {
        return roles.filter((role) => role.name === roleName)[0];
      })
    );
  }

  /* 
    need to change Role's ACL permission in PARSE API
  */
  attachUserWithRole(roleName: string, userId: string) {
    return this.getRole(roleName).pipe(
      switchMap((role) =>
        this.apiClient.put(role.objectId, {
          users: {
            __op: 'AddRelation',
            objects: [
              {
                __type: 'Pointer',
                className: '_User',
                objectId: userId,
              },
            ],
          },
        })
      ),
      // Return UserId
      map((_) => userId)
    );
  }
}
