/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TripState } from './trips.state';

export const TRIP_FEATURE_KEY = 'trips';

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
  (state: TripState) => state.trips[tripId].steps,
);

export const selectTripPoints = (tripId: number) => createSelector(
  selectFeature,
  (state: TripState) => state.trips[tripId]?.points,
);

export const selectStepDays = (tripId: number, stepId: number) => createSelector(
  selectFeature,
  (state: TripState) => state.trips[tripId].steps[stepId].daysInstance,
);
