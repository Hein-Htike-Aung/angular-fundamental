import { SecurityContext } from './security.context';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'projects/e02-security/src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SecurityInterceptor implements HttpInterceptor {
  constructor(private securityContext: SecurityContext) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    let cloneReq = req;

    if(this.securityContext.sessionToken) {
      cloneReq = req.clone({
        headers: req.headers.append(
          environment.api.sessionToken.key,
          this.securityContext.sessionToken
        ),
      });
    }
    return next.handle(cloneReq);
  }
}
