import { createReducer, on } from '@ngrx/store';

import * as TripsAction from './trips.actions';
import { initialTripState } from './trips.state';

export const tripReducer = createReducer(
  initialTripState,

  on(TripsAction.GetUserTripsSuccess, (state, { trips }) => {
    console.log('tripreducer', trips);
    return {
      ...state,
      trips,
    };
  }),

);
