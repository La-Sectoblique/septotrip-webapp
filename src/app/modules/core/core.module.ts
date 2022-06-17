import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { NbButtonModule, NbIconModule, NbInputModule, NbSelectModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { UserSettingsComponent } from './pages/user-settings/user-settings.component';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NbButtonModule,
    NbIconModule,
    NbInputModule,
    NbSelectModule,
    FormsModule,
    TranslateModule,
    AngularSvgIconModule.forRoot(),
  ],
  exports: [
    HeaderComponent,
  ],
  declarations: [
    HeaderComponent,
    UserSettingsComponent,
  ],
})
export class CoreModule { }
