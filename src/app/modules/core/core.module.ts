import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
<<<<<<< HEAD
import { TripModule } from '../trip/trip.module';
import { TripsComponent } from './pages/trips/trips.component';
import { NbButtonModule, NbIconModule, NbInputModule } from '@nebular/theme';
=======
import { NbButtonModule, NbIconModule } from '@nebular/theme';
>>>>>>> 012ae19a71ee9e6c78724f76542fefc4a54d55b9

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NbButtonModule,
    NbIconModule,
    NbInputModule,
  ],
  exports: [
    HeaderComponent,
  ],
  declarations: [
    HeaderComponent,
  ],
})
export class CoreModule { }
