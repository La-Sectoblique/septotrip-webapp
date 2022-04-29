import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbButtonModule, NbIconModule, NbInputModule, NbRadioModule } from '@nebular/theme';
import { TripPreviewComponent } from './components/trip-preview/trip-preview.component';
import { TripComponent } from './pages/trip/trip.component';
import { TripsComponent } from './pages/trips/trips.component';
import { CreateTripComponent } from './pages/create-trip/create-trip.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { StepModule } from '../step/step.module';
import { SharedModule } from '../../shared/shared.module';
import { MapModule } from '../map/map.module';
import { PointsModule } from '../points/points.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NbIconModule,
    NbButtonModule,
    NbInputModule,
    NbRadioModule,
    FormsModule,
    StepModule,
    SharedModule,
    MapModule,
    PointsModule,
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
