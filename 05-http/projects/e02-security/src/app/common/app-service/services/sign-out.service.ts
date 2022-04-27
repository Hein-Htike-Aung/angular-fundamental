import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiClient } from '../client/api.client';

const API = 'logout';

@Injectable({
  providedIn: 'root'
})
export class SignOutService {

  private apiClient: ApiClient

  constructor(
    private httpClient: HttpClient
  ) { 
    this.apiClient = new ApiClient(this.httpClient, API);
  }

  logout() {  
    return this.apiClient.post({});
  }
}
