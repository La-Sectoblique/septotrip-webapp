import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaysListComponent } from './components/days-list/days-list.component';
import { NbIconModule } from '@nebular/theme';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  imports: [
    CommonModule,
    NbIconModule,
    DragDropModule,
  ],
  declarations: [
    DaysListComponent,
  ],
  exports: [
    DaysListComponent,
  ],
})
export class DaysModule { }
