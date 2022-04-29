import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaysListComponent } from './components/days-list/days-list.component';
import { NbIconModule } from '@nebular/theme';

@NgModule({
  imports: [
    CommonModule,
    NbIconModule,
  ],
  declarations: [
    DaysListComponent,
  ],
  exports: [
    DaysListComponent,
  ],
})
export class DaysModule { }
