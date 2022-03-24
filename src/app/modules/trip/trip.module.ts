import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripPreviewComponent } from './trip-preview/trip-preview.component';
import { NbIconModule } from '@nebular/theme';

@NgModule({
  imports: [
    CommonModule,
    NbIconModule,
  ],
  declarations: [TripPreviewComponent],
  exports: [
    TripPreviewComponent,
  ],
})
export class TripModule { }
