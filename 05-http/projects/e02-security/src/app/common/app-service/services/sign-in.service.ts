import { RoleService } from './role.service';
import { HttpClient } from '@angular/common/http';
import { ApiClient } from './../client/api.client';
import { Injectable, Pipe } from '@angular/core';
import { map, switchMap, tap, Observable, catchError, of } from 'rxjs';
import { UserService } from './user.service';
import { SecurityContext } from '../../../domain/security/security.context';

const API = 'login';

@Injectable({
  providedIn: 'any',
})
export class SignInService {
  private apiClient: ApiClient;

  constructor(
    private httpClient: HttpClient,
    private userService: UserService,
    private roleService: RoleService,
    private secuirtyContext: SecurityContext
  ) {
    this.apiClient = new ApiClient(this.httpClient, API);
  }

  /* 
    form: {
      username: string;
      password: string;
    }
  */
  signIn(form: any) {
    return this.apiClient.get(form).pipe(
      // set sessionToken into SecurityContext
      tap((resp) => (this.secuirtyContext.sessionToken = resp.sessionToken)),
      // set User into SecurityContext
      switchMap((_) => this.userService.getCurrentUser()),
      tap((currentUser) => (this.secuirtyContext.user = currentUser)),
      // set UserRole into SecurityContext
      switchMap((currentUser) =>
        this.roleService.getUserRole(currentUser.objectId)
      ),
      tap((currentUserRole) => (this.secuirtyContext.role = currentUserRole)),
      // Return Role's Name
      map((currentUserRole) => currentUserRole.name),
      // Return Error if Exists
      catchError((error) => of(error))
    );
  }
}
