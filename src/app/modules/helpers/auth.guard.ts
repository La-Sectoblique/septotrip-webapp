import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';
import { AuthenticationService } from '../features/authentification/services/authentication.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private nbToastrService: NbToastrService,
    private translateService: TranslateService,
  ) {}

  canActivate(): boolean {
    const { isUserLoggedIn } = this.authenticationService;
    if (!isUserLoggedIn) {
      this.nbToastrService.info(
        this.translateService.instant('LoginNeededMessage'),
        this.translateService.instant('LoginNeeded'),
      );
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

}
