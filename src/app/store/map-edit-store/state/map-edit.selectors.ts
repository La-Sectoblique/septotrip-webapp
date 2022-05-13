/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MapEditState } from './map-edit.state';

export const MAP_EDIT_FEATURE_KEY = 'map-edit';

const selectFeature = createFeatureSelector<MapEditState>(
  MAP_EDIT_FEATURE_KEY,
);

export const selectMapEditMode = () => createSelector(
  selectFeature,
  (state: MapEditState) => state.mode,
);

export const selectDisplayedMapPointIds = () => createSelector(
  selectFeature,
  (state: MapEditState) => state.displayedPointIds,
);
