import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/e01-http/src/environments/environment';
import { Observable } from 'rxjs';
import { BaseModel, Course } from '../model/app.model';

export class AppClient {
  private API = '';

  constructor(private httpClient: HttpClient, private apiURL: string) {
    this.API = this.apiURL;
  }

  create(data: any): Observable<any> {
    return this.httpClient.post(this.API, data);
  }

  update(data: any): Observable<any> {
    return this.httpClient.put(`${this.API}/${data.objectId}`, data);
  }

  findById(id: string, params: any = {}): Observable<any> {
    return this.httpClient.get(`${this.API}/${id}`, { params: params });
  }

  getAll(params: any = {}): Observable<any> {
    return this.httpClient.get(this.API, { params: params });
  }
}
