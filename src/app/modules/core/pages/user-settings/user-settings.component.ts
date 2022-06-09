import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UserLanguageService } from 'src/app/modules/shared/services/user-language.service';

@Component({
  selector: 'spt-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss'],
})
export class UserSettingsComponent {

  selectedLanguage: string;

  constructor(
    private transalte: TranslateService,
    private userLanguageService: UserLanguageService,
  ) {
    this.selectedLanguage = this.userLanguageService.getLanguage() ?? this.transalte.getDefaultLang();
  }

  updateTranslation(language: string): void {
    this.transalte.use(language);
    this.userLanguageService.setLanguage(language);
  }

}
