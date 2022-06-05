import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { init, Platform } from '@la-sectoblique/septoblique-service';
import { TranslateService } from '@ngx-translate/core';
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
    private translate: TranslateService,
  ) {
    translate.addLangs(['fr', 'en']);
    translate.setDefaultLang('fr');
  }

  ngOnInit(): void {

    this.titleService.setTitle('SeptoTrip');

    init({
      getToken: (): string => this.tokenStorageService.getToken(),
      storeToken: (token: string): void => this.tokenStorageService.setToken(token),
      url: environment.baseURL,
      platform: Platform.BROWSER,
      context: 'development',
    });
  }

}
