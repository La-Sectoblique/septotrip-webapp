import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { login } from '@la-sectoblique/septoblique-service';
import { SuccessLoginResponse } from '@la-sectoblique/septoblique-service/dist/types/utils/Api';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent{

  email: string;
  password: string;

  constructor(private router: Router) { }

  connection(): void{
    login({ email: this.email, password: this.password })
      .then((res: SuccessLoginResponse) => this.router.navigate(['trips']));
  }

}
