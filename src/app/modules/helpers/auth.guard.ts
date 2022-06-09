import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from '../features/authentification/services/authentication.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
  ) {}

  canActivate(): boolean {
    const { isUserLoggedIn } = this.authenticationService;
    if (!isUserLoggedIn) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

}
