import { TripOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Trip';
import { createAction, props } from '@ngrx/store';


export const GetUserTrips = createAction(
  '[Trips] Get user trips',
);

export const GetUserTripsSuccess = createAction(
  '[Trips]: Get user trips success',
  props<{ trips: TripOutput[] }>(),
);

