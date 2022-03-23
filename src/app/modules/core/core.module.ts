import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { TripModule } from '../trip/trip.module';
import { TripsComponent } from './pages/trips/trips.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TripModule,
  ],
  exports: [
    HeaderComponent,
  ],
  declarations: [
    HeaderComponent,
    TripsComponent,
  ],
})
export class CoreModule { }
