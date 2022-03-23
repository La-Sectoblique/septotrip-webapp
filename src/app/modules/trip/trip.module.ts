import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripComponent } from './trip/trip.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [TripComponent],
  exports: [
    TripComponent,
  ],
})
export class TripModule { }
