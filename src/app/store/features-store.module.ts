import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripsStoreModule } from './trips-store/trips-store.module';
import { MapEditStoreModule } from './map-edit-store/map-edit-store.module';

@NgModule({
  imports: [
    CommonModule,
    TripsStoreModule,
    MapEditStoreModule,
  ],
  declarations: [],
})
export class FeaturesStoreModule { }
