import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { UtilsEffects } from './state/utils.effects';
@NgModule({
  imports: [
    CommonModule,
    // StoreModule.forFeature(TRIP_FEATURE_KEY, tripReducer),
    EffectsModule.forFeature([UtilsEffects]),
  ],
  declarations: [],
})
export class UtilsStoreModule { }
