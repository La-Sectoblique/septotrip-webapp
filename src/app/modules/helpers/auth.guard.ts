import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AccountService } from '../core/services/account.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private accountService: AccountService,
  ){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    /*const user = this.accountService.userValue;
    if (!user) {
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false;
    }*/

    return true;
  }

}
