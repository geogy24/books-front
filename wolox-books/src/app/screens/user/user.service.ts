import { environment } from './../../../environments/environment';
import { User } from './user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private URL: string = environment.URL;

  constructor(private httpClient: HttpClient) { }

  add(user: User): Observable<HttpResponse<Object>> {
    const data = Object.assign({ user: {...user, locale: 'en'} });
    return this.httpClient.post(`${this.URL}/api/v1/users`, data, {observe: 'response'});
  }

  login(login: any): Observable<HttpResponse<Object>> {
    const data = { session: { ...login } };
    return this.httpClient.post(`${this.URL}/api/v1/users/sessions`, data, {observe: 'response'});
  }
}
