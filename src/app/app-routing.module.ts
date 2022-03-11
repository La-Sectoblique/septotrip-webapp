import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TripComponent } from './modules/trip/trip.component';

const routes: Routes = [{
  path: 'test',
  component: TripComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
