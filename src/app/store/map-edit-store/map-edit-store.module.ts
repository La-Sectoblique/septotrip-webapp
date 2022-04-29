import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { MAP_EDIT_FEATURE_KEY } from './state/map-edit.selectors';
import { mapEditReducer } from './state/map-edit.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(MAP_EDIT_FEATURE_KEY, mapEditReducer),
  ],
  declarations: [],
})
export class MapEditStoreModule { }
