import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import * as moment from 'moment';

interface LoginResult {
  token: string;
  expiresAt: number;
}

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private URL = 'http://localhost:8080/login'; // TODO: fix URL

  constructor(private http: HttpClient) {}

  public login(username: string, password: string): Observable<LoginResult> {
    return this.http
      .post<LoginResult>(this.URL, {
        username: username,
        password: password,
      })
      .pipe(
        tap(loginResult => {
          this.setSession(loginResult);
        })
      );
  }

  private setSession(loginResult: LoginResult) {
    if (!loginResult) return;

    const expiresAt = moment(loginResult.expiresAt);

    localStorage.setItem('token', loginResult.token);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('expires_at');
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() { 
    const expiration = localStorage.getItem('expires_at');
    if (!expiration) return;
    const expiresAt = JSON.parse(expiration); 
    return moment(expiresAt);
  }
}
