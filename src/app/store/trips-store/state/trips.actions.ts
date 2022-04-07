import { StepOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Step';
import { TripOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Trip';
import { createAction, props } from '@ngrx/store';


export const GetUserTrips = createAction(
  '[Trips] Get user trips',
);

export const GetUserTripsSuccess = createAction(
  '[Trips]: Get user trips success',
  props<{ trips: TripOutput[] }>(),
);

export const GetTrip = createAction(
  '[Trips] Get user trip',
  props<{ tripId: number }>(),
);

export const GetTripSuccess = createAction(
  '[Trips] Get user trip success',
  props<{ trip: TripOutput }>(),
);

export const GetTripSteps = createAction(
  '[Trip] Get trip steps',
  props<{ tripId: number }>(),
);

export const GetTripStepsSuccess = createAction(
  '[Trip] Get trip steps Success',
  props<{ steps: StepOutput[]; tripId: number }>(),
);
