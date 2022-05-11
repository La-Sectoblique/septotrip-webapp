import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from '../core/services/account.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  private isloggedIn: boolean;

  constructor(
    private router: Router,
    private accountService: AccountService,
  ){
    this.isloggedIn = false;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const user = this.accountService.userValue;
    if (!user) {
      this.router.navigate(['/account/login'], { queryParams: { returnUrl: state.url } });
      return false;
    }
    this.isloggedIn = true;
    return true;
  }

  LoggedOutUser(): void{
    this.isloggedIn = false;
  }

}
