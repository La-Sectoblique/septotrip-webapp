import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'spt-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  loggedIn: boolean;

  selectedLanguage = 'fr';

  constructor(
    private accountService: AccountService,
    private router: Router,
    private transalte: TranslateService,
  ) {}

  ngOnInit(): void {
    this.loggedIn = this.accountService.isLoggedIn;
  }

  logout(): void {
    this.accountService.logout();
  }

  updateTranslation(language: string): void {
    this.transalte.use(language);
  }

}
