import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbButtonModule, NbIconModule } from '@nebular/theme';
import { TripPreviewComponent } from './components/trip-preview/trip-preview.component';
import { TripComponent } from './pages/trip/trip.component';
import { TripsComponent } from './pages/trips/trips.component';

@NgModule({
  imports: [
    CommonModule,
    NbIconModule,
    NbButtonModule,
  ],
  declarations: [
    TripPreviewComponent,
    TripComponent,
    TripsComponent,
  ],
  exports: [
    TripPreviewComponent,
  ],
})
export class TripModule { }
