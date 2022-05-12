import { DayOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Day';
import { PointAttributes, PointOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Point';
import { StepAttributes, StepOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Step';
import { TripOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Trip';
import { UserOutput } from '@la-sectoblique/septoblique-service/dist/types/models/User';
import { createAction, props } from '@ngrx/store';
import { UpdateTripPointPayload, UpdateTripStepPayload } from './trips.payload';

// Trip

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

export const DeleteTrip = createAction(
  '[Trips] Delete user trip',
  props<{ tripId: number }>(),
);

export const DeleteTripSuccess = createAction(
  '[Trips] Delete user trip success',
  props<{ tripId: number }>(),
);

// Steps

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
  props<{ tripId: number; step: Omit<StepAttributes, 'tripId' | 'order'> }>(),
);

export const CreateTripStepSuccess = createAction(
  '[Trip] Create trip step Success',
  props<{ tripId: number; step: StepOutput }>(),
);

export const UpdateTripStep = createAction(
  '[Trip] Update Trip Step',
  props<UpdateTripStepPayload>(),
);
export const UpdateTripStepSuccess = createAction(
  '[Trip] Update Trip Step Success',
  props<{ tripId: number; newStep: StepOutput }>(),
);

export const DeleteTripStep = createAction(
  '[Trip] Delete trip step',
  props<{ tripId: number; stepId: number }>(),
);

export const DeleteTripStepSuccess = createAction(
  '[Trip] Delete trip step Success',
  props<{ tripId: number; stepId: number }>(),
);

export const UpdateTripStepOrder = createAction(
  '[Trip] Update Trip Step Order',
  props<{ fromIdx: number; toIdx: number; tripId: number }>(),
);

// Days

export const GetStepDays = createAction(
  '[Trip] Get Step Days',
  props<{ stepId: number; tripId: number }>(),
);

export const GetStepDaysSuccess = createAction(
  '[Trip] Get Step Days Success',
  props<{ days: DayOutput[]; stepId: number; tripId: number }>(),
);

// Point

export const GetTripPoints = createAction(
  '[Trip] Get trip points',
  props<{ tripId: number }>(),
);

export const GetTripPointsSuccess = createAction(
  '[Trip] Get trip points Success',
  props<{ points: PointOutput[]; tripId: number }>(),
);

export const CreateTripPoint = createAction(
  '[Trip] Create trip point',
  props<{ tripId: number; point: Omit<PointAttributes, 'tripId' | 'order' | 'authorId'> }>(),
);

export const CreateTripPointSuccess = createAction(
  '[Trip] Create trip point Success',
  props<{ tripId: number; point: PointOutput }>(),
);

export const UpdateTripPoint = createAction(
  '[Trip] Update trip point',
  props<UpdateTripPointPayload>(),
);

export const UpdateTripPointSuccess = createAction(
  '[Trip] Update trip point Success',
  props<{ tripId: number; newPoint: PointOutput }>(),
);

export const DeleteTripPoint = createAction(
  '[Trip] Delete trip point',
  props<{ tripId: number; pointId: number }>(),
);

export const DeleteTripPointSuccess = createAction(
  '[Trip] Delete trip point Success',
  props<{ tripId: number; pointId: number }>(),
);

// Travelers

export const GetTripTravelers = createAction(
  '[Trip] Get trip travelers',
  props<{ tripId: number }>(),
);

export const GetTripTravelersSuccess = createAction(
  '[Trip] Get trip travelers success',
  props<{ tripId: number; travelers: UserOutput[] }>(),
);
