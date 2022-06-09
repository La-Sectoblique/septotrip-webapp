import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserLanguageService {

  key = 'user-language';

  getLanguage(): string | null {
    return localStorage.getItem(this.key);
  }

  setLanguage(language: string): void {
    localStorage.setItem(this.key, language);
  }

}
