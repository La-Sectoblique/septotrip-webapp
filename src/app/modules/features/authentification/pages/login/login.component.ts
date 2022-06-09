import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { login } from '@la-sectoblique/septoblique-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  loginForm = this.formBuilder.group({
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
    ]),
  });

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  login(): void {
    login({
      email: this.loginForm.value.email,
      password:  this.loginForm.value.password,
    })
      .then(() => this.router.navigate(['trips']));
  }

}
