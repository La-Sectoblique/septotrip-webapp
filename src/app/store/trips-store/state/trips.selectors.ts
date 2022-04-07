/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TripState } from './trips.state';

export const TRIP_FEATURE_KEY = 'trip_feature_key';

const selectFeature = createFeatureSelector<TripState>(
  TRIP_FEATURE_KEY,
);

export const selectUserTrips = () => createSelector(
  selectFeature,
  (state: TripState) => state.trips,
);
