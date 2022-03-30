import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { environment } from 'src/environments/environment';
import { TripsMapComponent } from './components/trips-map/trips-map.component';

@NgModule({
  imports: [
    CommonModule,
    NgxMapboxGLModule.withConfig({
      accessToken: environment.mapBoxToken,
    }),
  ],
  declarations: [
    TripsMapComponent,
  ],
  exports: [
    TripsMapComponent,
  ],
})
export class MapModule { }
