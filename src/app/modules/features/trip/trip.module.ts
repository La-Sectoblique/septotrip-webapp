import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbButtonModule, NbIconModule } from '@nebular/theme';
import { TripPreviewComponent } from './components/trip-preview/trip-preview.component';
import { TripComponent } from './pages/trip/trip.component';
import { TripsComponent } from './pages/trips/trips.component';
import { CreateTripComponent } from './pages/create-trip/create-trip.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    NbIconModule,
    NbButtonModule,
    RouterModule,
  ],
  declarations: [
    TripPreviewComponent,
    TripComponent,
    TripsComponent,
    CreateTripComponent,
  ],
  exports: [
    TripPreviewComponent,
  ],
})
export class TripModule { }
