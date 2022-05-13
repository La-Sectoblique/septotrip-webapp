import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { UserAttributes } from '@la-sectoblique/septoblique-service/dist/types/models/User';
import { login } from '@la-sectoblique/septoblique-service';
import { SuccessLoginResponse } from '@la-sectoblique/septoblique-service/dist/types/utils/Api';

@Injectable({ providedIn: 'root' })
export class AccountService {

  isLoggedIn: boolean;
  private userSubject: BehaviorSubject<UserAttributes>;
  private user: Observable<UserAttributes>;

  constructor(
    private router: Router,
    private http: HttpClient,
  ) {
    this.userSubject = new BehaviorSubject<UserAttributes>(JSON.parse(localStorage.getItem('user') || '{}'));
    this.user = this.userSubject.asObservable();
    this.isLoggedIn = false;
  }

  public get userValue(): UserAttributes {
    return this.userSubject.value;
  }

  loginUser(email: string, password: string): Observable<UserAttributes> {
    return this.http.post<UserAttributes>(`${environment.baseURL}${`route`}`, { email, password })
      .pipe(map((user) => {
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);
        return user;
      }));
  }
  // return this.http.post<UserAttributes>(`${environment.baseURL}${`route`}`, { email, password })
  //   .pipe(map((user) => {
  //     localStorage.setItem('user', JSON.stringify(user));
  //     this.userSubject.next(user);
  //     this.isLoggedIn = true;
  //     return user;
  //   }));
  // try {
  //   const loginResult = await login({ email, password });
  //   console.log('loginResult', loginResult);
  //   return loginResult;
  // } catch()

  logout(): void {
    localStorage.clear();
    console.log(localStorage.getItem('user'));
    this.router.navigate(['home']);
    this.isLoggedIn = false;
  }

}
