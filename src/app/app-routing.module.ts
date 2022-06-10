import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/core/pages/home/home.component';
import { UserSettingsComponent } from './modules/core/pages/user-settings/user-settings.component';
import { LoginComponent } from './modules/features/authentification/pages/login/login.component';
import { RegisterComponent } from './modules/features/authentification/pages/register/register.component';
import { CreateTripComponent } from './modules/features/trip/pages/create-trip/create-trip.component';
import { TripComponent } from './modules/features/trip/pages/trip/trip.component';
import { TripsComponent } from './modules/features/trip/pages/trips/trips.component';
import { AuthGuard } from './modules/helpers/auth.guard';

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
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'settings',
    component: UserSettingsComponent,
  },
  {
    // Put protected routes under this
    path: '',
    canActivate: [AuthGuard],
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
            path: ':tripId',
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
