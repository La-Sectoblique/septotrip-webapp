import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { environment } from 'src/environments/environment';
import { TripsMapComponent } from './components/trips-map/trips-map.component';
import { NbDialogModule } from '@nebular/theme';
import { MapEditModePreviewComponent } from './components/map-edit-mode-preview/map-edit-mode-preview.component';

@NgModule({
  imports: [
    CommonModule,
    NgxMapboxGLModule.withConfig({
      accessToken: environment.mapBoxToken,
    }),
    NbDialogModule.forChild(),
  ],
  declarations: [
    TripsMapComponent,
    MapEditModePreviewComponent,
  ],
  exports: [
    TripsMapComponent,
  ],
})
export class MapModule { }
