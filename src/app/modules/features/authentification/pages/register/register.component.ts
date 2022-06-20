import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { register } from '@la-sectoblique/septoblique-service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent /*implements OnInit*/ {

  registerForm = this.formBuilder.group({
    firstname: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
    ]),
    lastname: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
    ]),
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

  register(): void {
    register({
      firstName: this.registerForm.value.firstname,
      lastName: this.registerForm.value.lastname,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
    })
      .then(() => this.router.navigate(['login']));
  }

}
