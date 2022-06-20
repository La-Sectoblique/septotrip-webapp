import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { login } from '@la-sectoblique/septoblique-service';
import { UserOutput } from '@la-sectoblique/septoblique-service/dist/types/models/User';
import { NbToastrService } from '@nebular/theme';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { lastValueFrom } from 'rxjs';
import { TokenStorageService } from 'src/app/modules/core/services/token-storage.service';
import { ResetAllStore } from 'src/app/store/utils-store/state/utils.actions';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  public isUserLoggedIn = false;

  public user: UserOutput | null;

  constructor(
    private tokenStorageService: TokenStorageService,
    private router: Router,
    private http: HttpClient,
    private nbToastrService: NbToastrService,
    private translate: TranslateService,
    private store: Store,
  ) {}


  login(email: string, password: string): void {
    login({
      email,
      password,
    }).then(() => {
      this.isUserLoggedIn = true;
      this.router.navigate(['trips']);

      this.getCurrentJwtUser().then((user) => {
        this.user = user;
      });
    }).catch(() => {
      this.nbToastrService.danger(
        this.translate.instant('LoginErrorMessage'),
        this.translate.instant('LoginError'),
      );
    });
  }

  checkTokenPresence(): void {
    if (this.tokenStorageService.getToken()) {
      this.isUserLoggedIn = true;
    }
  }

  logout(redirectRoute = 'home'): void {
    this.tokenStorageService.deleteToken();
    this.isUserLoggedIn = false;
    this.user = null;
    this.store.dispatch(ResetAllStore());
    this.router.navigate([redirectRoute]);
  }

  getCurrentJwtUser(): Promise<UserOutput | null> {
    const jwt = this.tokenStorageService.getToken();

    if (jwt) {
      const httpOptions = {
        headers: new HttpHeaders({
          Authorization: `Bearer ${jwt}`,
        }),
      };

      return lastValueFrom(this.http.get<UserOutput>(`${environment.baseURL}/me`, httpOptions))
        .then((user) => this.user = user)
        .catch(() => {
          this.logout('login');
          return null;
        });
    }

    return Promise.resolve(null);
  }

}
