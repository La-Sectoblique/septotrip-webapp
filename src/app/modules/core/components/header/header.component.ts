import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/modules/helpers/auth.guard';

@Component({
  selector: 'spt-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  constructor(private authGuard: AuthGuard, private router: Router){}

  logout(): void{
    this.authGuard.LoggedOutUser();
    this.router.navigate(['home']);
  }

}
