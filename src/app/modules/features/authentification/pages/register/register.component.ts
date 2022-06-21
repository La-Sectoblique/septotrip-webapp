import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { register } from '@la-sectoblique/septoblique-service';
import { NbToastrService } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';

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
      Validators.email,
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
    ]),
  });

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private nbToastrService: NbToastrService,
    private translate: TranslateService,
  ) { }

  register(): void {
    register({
      firstName: this.registerForm.value.firstname,
      lastName: this.registerForm.value.lastname,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
    })
      .then(() => {
        this.router.navigate(['login']);
        this.nbToastrService.success(
          this.translate.instant('RegisterSuccessMessage'),
          this.translate.instant('RegisterSuccessTitle'),
        );
      });
  }

}
