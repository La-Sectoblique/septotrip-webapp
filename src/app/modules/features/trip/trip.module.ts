import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbButtonModule,
  NbIconModule,
  NbInputModule,
  NbPopoverModule,
  NbRadioModule,
  NbTabsetModule } from '@nebular/theme';
import { TripPreviewComponent } from './components/trip-preview/trip-preview.component';
import { TripComponent } from './pages/trip/trip.component';
import { TripsComponent } from './pages/trips/trips.component';
import { CreateTripComponent } from './pages/create-trip/create-trip.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StepModule } from '../step/step.module';
import { SharedModule } from '../../shared/shared.module';
import { MapModule } from '../map/map.module';
import { PointsModule } from '../points/points.module';
import { TravelersModule } from '../travelers/travelers.module';
import { TranslateModule } from '@ngx-translate/core';
import { FilesModule } from '../files/files.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NbIconModule,
    NbButtonModule,
    NbInputModule,
    NbRadioModule,
    FormsModule,
    ReactiveFormsModule,
    StepModule,
    SharedModule,
    MapModule,
    PointsModule,
    TravelersModule,
    NbPopoverModule,
    NbTabsetModule,
    TranslateModule,
    FilesModule,
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
