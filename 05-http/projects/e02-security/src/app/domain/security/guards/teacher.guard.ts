import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { SecurityContext } from '../security.context';

@Injectable({
  providedIn: 'root',
})
export class TeacherGuard implements CanActivate, CanActivateChild {
  constructor(
    private securityContext: SecurityContext,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.securityContext.authority === 'ADMIN' ||
      this.securityContext.authority === 'TEACHER'
      ? true
      : this.navigateToForbidden();
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    return this.securityContext.authority === 'ADMIN' ||
      this.securityContext.authority === 'TEACHER'
      ? true
      : this.navigateToForbidden();
  }

  navigateToForbidden() {
    this.router.navigate(['/public/forbidden']);
    return false;
  }
}
