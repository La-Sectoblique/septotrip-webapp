import { Component, OnInit } from '@angular/core';
import { login, init } from '@la-sectoblique/septoblique-service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    console.log('app init');


    const loginReturn = login({ email: 'jean', password: 'jean' });
    console.log('loginreturn', loginReturn);
  }

}
