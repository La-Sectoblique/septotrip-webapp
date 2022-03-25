import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripPreviewComponent } from './trip-preview/trip-preview.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [TripPreviewComponent],
  exports: [
    TripPreviewComponent,
  ],
})
export class TripModule { }
