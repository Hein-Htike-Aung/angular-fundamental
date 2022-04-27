import { HttpClient } from '@angular/common/http';
import { environment } from 'projects/e02-security/src/environments/environment';
import { Observable } from 'rxjs';

export class ApiClient {
  private apiURL: string;

  constructor(private httpClient: HttpClient, private resource: string) {
    this.apiURL = `${environment.api.url}/${this.resource}`;
  }

  get(param: any = {}): Observable<any> {
    return this.httpClient.get<any>(this.apiURL, { params: param });
  }

  findById(id: string, param: any = {}): Observable<any> {
    return this.httpClient.get<any>(`${this.apiURL}/${id}`, {params: param});
  }

  post(data: any): Observable<any> {
    return this.httpClient.post<any>(this.apiURL, data);
  }

  put(id: string, data: any): Observable<any> {
    return this.httpClient.put<any>(`${this.apiURL}/${id}`, data);
  }

}
