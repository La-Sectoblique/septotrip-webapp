import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/modules/features/authentification/services/authentication.service';
// import { AccountService } from '../../services/account.service';

@Component({
  selector: 'spt-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  constructor(
    private authenticationService: AuthenticationService,
  ) {}

  logout(): void {
    this.authenticationService.logout();
  }

}
