import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'spt-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  loggedIn: boolean;

  constructor(
    private accountService: AccountService,
  ) {}

  ngOnInit(): void {
    this.loggedIn = this.accountService.isLoggedIn;
  }

  logout(): void {
    this.accountService.logout();
  }

}
