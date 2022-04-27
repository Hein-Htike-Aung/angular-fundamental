import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/e02-security/src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiClientInterceptor implements HttpInterceptor {

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
      
    const cloneReq = req.clone({
      headers: req.headers
        .append(environment.api.apiID.key, environment.api.apiID.value)
        .append(environment.api.apiKey.key, environment.api.apiKey.value),
    });

    return next.handle(cloneReq);
  }
}
