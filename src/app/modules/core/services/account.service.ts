import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { UserAttributes } from '@la-sectoblique/septoblique-service/dist/types/models/User';

@Injectable({ providedIn: 'root' })
export class AccountService{

  private userSubject!: BehaviorSubject<UserAttributes>;
  private user: Observable<UserAttributes>;

  constructor(
    private router: Router,
    private http: HttpClient,
  ){
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.userSubject = new BehaviorSubject<UserAttributes>(JSON.parse(localStorage.getItem('user')!));
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): UserAttributes {
    return this.userSubject.value;
  }

  login(email: string, password: string): Observable<UserAttributes>{
    return this.http.post<UserAttributes>(`${environment.baseURL}${`route`}`, { email, password })
      .pipe(map((user) => {
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);
        return user;
      }));
  }

}
