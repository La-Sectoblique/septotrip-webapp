import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { login, init, Platform } from '@la-sectoblique/septoblique-service';
import { SuccessLoginResponse } from '@la-sectoblique/septoblique-service/dist/types/utils/Api';
import { environment } from 'src/environments/environment';
import { TokenStorageService } from './modules/core/services/token-storage.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(
    private tokenStorageService: TokenStorageService,
    private titleService: Title,
  ) {}

  ngOnInit(): void {

    this.titleService.setTitle('SeptoTrip');

    init({
      getToken: (): string => this.tokenStorageService.getToken(),
      storeToken: (token: string): void => this.tokenStorageService.setToken(token),
      url: environment.baseURL,
      platform: Platform.BROWSER,
      context: 'development',
    });

    login({ email: 'jean', password: 'jean' })
      .then((res: SuccessLoginResponse) => console.log('loginres', res));
  }

}
