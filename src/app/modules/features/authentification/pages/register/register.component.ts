import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { register } from '@la-sectoblique/septoblique-service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent /*implements OnInit*/ {

  firstname: string;
  lastname: string;
  email: string;
  password: string;

  constructor(private router: Router) { }

  /*ngOnInit() {
  }*/

  inscription(): void {
    register({ email: this.email, password: this.password, firstName: this.firstname, lastName: this.lastname })
      .then(() => this.router.navigate(['login']));
  }

}
