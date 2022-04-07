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

  on(TripsAction.GetTripStepsSuccess, (state, { steps, tripId }) => {
    let newSteps = state.trips[tripId].steps;
    steps.forEach((step) => {
      newSteps = {
        ...newSteps,
        [step.id]: {
          stepInstance: step,
        },
      };
    });

    return {
      ...state,
      trips: {
        ...state.trips,
        [tripId]: {
          ...state.trips[tripId],
          steps: newSteps,
        },
      },
    };
  }),

);
