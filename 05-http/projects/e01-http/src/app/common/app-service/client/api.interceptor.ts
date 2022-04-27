import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'projects/e01-http/src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    const cloneReq = req.clone({
      headers: req.headers
        .append(
          environment.api.header.appId.key,
          environment.api.header.appId.value
        )
        .append(
          environment.api.header.apiKey.key,
          environment.api.header.apiKey.value
        ),
    });

    return next.handle(cloneReq);
  }
}
