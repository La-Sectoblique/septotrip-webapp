import { StepAttributes, StepOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Step';
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

export const CreateTripStep = createAction(
  '[Trip] Create trip step',
  props<{ tripId: number; step: Omit<Omit<StepAttributes, 'tripId'>, 'order'> }>(),
);

export const CreateTripStepSuccess = createAction(
  '[Trip] Create trip step Success',
  props<{ tripId: number; step: StepOutput }>(),
);

export const DeleteTripStep = createAction(
  '[Trip] Delete trip step',
  props<{ tripId: number; stepId: number }>(),
);

export const DeleteTripStepSuccess = createAction(
  '[Trip] Delete trip step Success',
  props<{ tripId: number; stepId: number }>(),
);

