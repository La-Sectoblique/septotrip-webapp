import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { login } from '@la-sectoblique/septoblique-service';
import { TokenStorageService } from 'src/app/modules/core/services/token-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  isUserLoggedIn = false;

  constructor(
    private tokenStorageService: TokenStorageService,
    private router: Router,
  ) {}


  login(email: string, password: string): void {
    login({
      email,
      password,
    }).then(() => {
      this.isUserLoggedIn = true;
      this.router.navigate(['trips']);
    });
  }

  checkTokenPresence(): void {
    if (this.tokenStorageService.getToken()) {
      this.isUserLoggedIn = true;
    }
  }

  logout(): void {
    this.tokenStorageService.deleteToken();
    this.isUserLoggedIn = false;
    this.router.navigate(['home']);
  }

}
