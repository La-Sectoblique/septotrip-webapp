import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { NbButtonModule, NbIconModule } from '@nebular/theme';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NbButtonModule,
    NbIconModule,
  ],
  exports: [
    HeaderComponent,
  ],
  declarations: [
    HeaderComponent,
  ],
})
export class CoreModule { }
