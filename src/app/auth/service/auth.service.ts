import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterRequestInterface } from '../types/registerRequest.interface';
import { Observable, map } from 'rxjs';
import { CurrentUserInterface } from '../../shared/types/currentUser.interface';
import { AuthResponseInterface } from '../types/authResponse.interface';
import { LoginRequestInterface } from '../types/loginRequest.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    // const url = 'https://api.realworld.io.api/users';
    const url = 'http://localhost:3000/api/users';
    // const url = environmental.apiUrl + '/users';
    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map((response: AuthResponseInterface) => response.user));
  }

  login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    const url = 'http://localhost:3000/api/users/login';
    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map((response) => response.user));
  }

  getCurrentUser(): Observable<CurrentUserInterface> {
    const url = 'http://localhost:3000/api/user';
    return this.http
      .get<AuthResponseInterface>(url)
      .pipe(map((response) => response.user));
  }
}
