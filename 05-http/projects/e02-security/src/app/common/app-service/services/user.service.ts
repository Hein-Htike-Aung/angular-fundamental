import { HttpClient } from '@angular/common/http';
import { ApiClient } from './../client/api.client';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from '../model/app.model';

const API = 'users';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiClient: ApiClient;

  constructor(private httpClient: HttpClient) {
    this.apiClient = new ApiClient(this.httpClient, API);
  }

  getUser(id: string): Observable<User> {
    return this.apiClient.findById(id);
  }

  getCurrentUser(): Observable<User> {
    return this.getUser('me');
  }

  create(user: User): Observable<string> {
    return this.apiClient.post(user).pipe(map((resp) => resp.objectId));
  }

  update(userId: string, user: User) {
    return this.apiClient.put(userId, user);
  }

  findById(id: string) {
    return this.apiClient.findById(id);
  }
}
