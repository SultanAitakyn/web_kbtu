import {Injectable} from '@angular/core';
import {RegisterRequestInterface} from 'src/app/auth/types/registerRequest.interface';
import {map, Observable} from 'rxjs';
import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {AuthResponseInterface} from 'src/app/auth/types/authResponse.interface';
import {LoginRequestInterface} from 'src/app/auth/types/login.interface';

@Injectable()

export class AuthService {
  constructor(private http: HttpClient) {
  }

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    debugger
    return this.http.post<AuthResponseInterface>(environment.apiUrl + 'register', data).pipe(map((response) => (response.user)));
  }

  login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    return this.http.post<AuthResponseInterface>(environment.apiUrl + 'login', data).pipe(map((response) => (response.user)));
  }

}
