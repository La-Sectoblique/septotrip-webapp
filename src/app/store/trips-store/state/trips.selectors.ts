/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FlattenedTrip } from 'src/app/modules/features/trip/models/flattened-trip';
import { TripState } from './trips.state';

export const TRIP_FEATURE_KEY = 'trip_feature_key';

const selectFeature = createFeatureSelector<TripState>(
  TRIP_FEATURE_KEY,
);

export const selectUserTrips = () => createSelector(
  selectFeature,
  (state: TripState) => Object.values(state.trips),
);

export const selectUserTrip = (tripId: number) => createSelector(
  selectFeature,
  (state: TripState) => state.trips[tripId],
);

export const selectTripSteps = (tripId: number) => createSelector(
  selectFeature,
  (state: TripState) => state.trips[tripId].steps && Object.values(state.trips[tripId].steps),
);
