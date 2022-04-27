import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/e02-security/src/environments/environment';
import { BatchRequestsBody } from '../model/app.model';


@Injectable({ providedIn: 'root' })
export class ApiBatchClient {
  private apiURL = `${environment.api.url}/batch`;

  constructor(private httpClient: HttpClient) {}

  post(batchRequestsBody: BatchRequestsBody[]): Observable<any> {
    return this.httpClient.post(this.apiURL, { requests: batchRequestsBody });
  }
}
