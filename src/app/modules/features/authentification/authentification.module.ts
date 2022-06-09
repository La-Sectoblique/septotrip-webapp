import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { NbButtonModule, NbInputModule } from '@nebular/theme';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NbButtonModule,
    NbInputModule,
    TranslateModule,
  ],
  declarations: [LoginComponent, RegisterComponent],
})
export class AuthentificationModule { }
