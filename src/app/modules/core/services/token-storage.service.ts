import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {

  TOKEN_KEY = 'septo-token';

  getToken(): string | null{
    return localStorage.getItem(this.TOKEN_KEY);
  }

  setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  deleteToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

}
