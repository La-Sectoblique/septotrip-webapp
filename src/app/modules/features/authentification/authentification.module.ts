import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { SigninComponent } from './pages/signin/signin.component';
import { NbButtonModule, NbInputModule } from '@nebular/theme';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NbButtonModule,
    NbInputModule,
  ],
  declarations: [LoginComponent, SigninComponent],
})
export class AuthentificationModule { }
