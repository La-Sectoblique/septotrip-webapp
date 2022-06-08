import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { TRIP_FEATURE_KEY } from './state/trips.selectors';
import { tripReducer } from './state/trips.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TripsEffects } from './state/effects/trips.effects';
import { TravelersEffects } from './state/effects/travelers.effects';
import { StepsEffects } from './state/effects/steps.effects';
import { PointsEffects } from './state/effects/points.effects';
import { DaysEffects } from './state/effects/days.effects';
import { PathsEffects } from './state/effects/paths.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(TRIP_FEATURE_KEY, tripReducer),
    EffectsModule.forFeature([
      TripsEffects,
      TravelersEffects,
      StepsEffects,
      PointsEffects,
      DaysEffects,
      PathsEffects,
    ]),
  ],
  declarations: [],
})
export class TripsStoreModule { }
