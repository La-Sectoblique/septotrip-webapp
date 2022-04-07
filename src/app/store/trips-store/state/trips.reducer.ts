import { createReducer, on } from '@ngrx/store';

import * as TripsAction from './trips.actions';
import { initialTripState } from './trips.state';

export const tripReducer = createReducer(
  initialTripState,

  on(TripsAction.GetUserTripsSuccess, (state, { trips }) => {
    let newTrips = state.trips;
    trips.forEach((trip) => {
      newTrips = {
        ...newTrips,
        [trip.id]: {
          ...state.trips[trip.id],
          tripInstance: trip,
        },
      };
    });
    return {
      ...state,
      trips: newTrips,
    };
  }),

  on(TripsAction.GetTripSuccess, (state, { trip }) => ({
    ...state,
    trips: {
      ...state.trips,
      [trip.id]: {
        ...state.trips[trip.id],
        tripInstance: trip,
      },
    },
  })),

  on(TripsAction.GetTripStepsSuccess, (state, { steps, tripId }) => ({
    ...state,
    trips: {
      ...state.trips,
      [tripId]: {
        ...state.trips[tripId],
        steps: steps.map((step) => ({ stepInstance: step })),
      },
    },
  })),

  on(TripsAction.DeleteTripStepSuccess, (state, { stepId, tripId }) => ({
    ...state,
    trips: {
      ...state.trips,
      [tripId]: {
        ...state.trips[tripId],
        steps: state.trips[tripId].steps.filter((step) => step.stepInstance.id !== stepId),
      },
    },
  })),

);
