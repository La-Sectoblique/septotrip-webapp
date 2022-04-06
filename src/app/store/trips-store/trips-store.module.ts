import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { TRIP_FEATURE_KEY } from './state/trips.selectors';
import { tripReducer } from './state/trips.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TripsEffects } from './state/trips.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(TRIP_FEATURE_KEY, tripReducer),
    EffectsModule.forFeature([TripsEffects]),
  ],
  declarations: [],
})
export class TripsStoreModule { }
