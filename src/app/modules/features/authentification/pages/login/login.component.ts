import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { login } from '@la-sectoblique/septoblique-service';
import { SuccessLoginResponse } from '@la-sectoblique/septoblique-service/dist/types/utils/Api';
import { AccountService } from 'src/app/modules/core/services/account.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  email: string;
  password: string;

  constructor(
    private router: Router,
    private accountService: AccountService,
  ) { }

  connection(): void {
    login({ email: this.email, password: this.password })
      .then(() => this.router.navigate(['trips']));
  }

}
