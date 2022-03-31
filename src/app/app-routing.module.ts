import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/core/pages/home/home.component';
import { CreateTripComponent } from './modules/features/trip/pages/create-trip/create-trip.component';
import { TripComponent } from './modules/features/trip/pages/trip/trip.component';
import { TripsComponent } from './modules/features/trip/pages/trips/trips.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    // Put protected routes under this
    path: '',
    // canActivate: @todo: set routeGuards here
    children: [
      {
        path: 'trips',
        children: [
          {
            path: '',
            component: TripsComponent,
            pathMatch: 'full',
          },
          {
            path: 'create',
            component: CreateTripComponent,
            pathMatch: 'full',
          },
          {
            path: ':tripsId',
            component: TripComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
