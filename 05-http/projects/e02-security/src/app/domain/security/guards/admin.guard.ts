import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { SecurityContext } from '../security.context';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(
    private securityContext: SecurityContext,
    private router: Router
  ) {}

  canLoad(route: Route, segments: UrlSegment[]) {
    return this.securityContext.authority === 'ADMIN';
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    return this.securityContext.authority === 'ADMIN'
      ? true
      : this.navigateToForbidden();
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.securityContext.authority === 'ADMIN'
      ? true
      : this.navigateToForbidden();
  }

  navigateToForbidden() {
    this.router.navigate(['/public/forbidden']);
    return false;
  }
}
