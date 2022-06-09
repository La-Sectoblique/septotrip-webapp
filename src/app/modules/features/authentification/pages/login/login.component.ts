import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';


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
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder,
  ) { }

  login(): void {
    this.authenticationService.login(this.loginForm.value.email, this.loginForm.value.password);
  }

}
