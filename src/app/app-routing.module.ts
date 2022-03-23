import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/core/pages/home/home.component';
import { TripsComponent } from './modules/core/pages/trips/trips.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'trips', component: TripsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
