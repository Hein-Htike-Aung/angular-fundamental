import { User, Role } from './../../common/app-service/model/app.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
// Login User Holder
export class SecurityContext {
  private _user?: User;
  private _role?: Role;
  private _sessionToken?: string;

  clearSecurityContext() {
    this._user = undefined;
    this._role = undefined;
    this._sessionToken = undefined;
  }

  get authority(): string {
      return this._role?.name || 'ANONYMOUSE';
  }

  set user(user: User) {
    this._user = user;
  }

  set role(role: Role) {
    this._role = role;
  }

  set sessionToken(sessionToken: string) {
    this._sessionToken = sessionToken;
  }

  get user(): User {
    return this._user!;
  }

  get role(): Role {
    return this._role!;
  }

  get sessionToken() {
    return this._sessionToken!;
  }
}
