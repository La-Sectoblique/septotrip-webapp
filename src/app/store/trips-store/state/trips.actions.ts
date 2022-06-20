import { DayOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Day';
import { PathOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Path';
import { PointAttributes, PointOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Point';
import { StepAttributes, StepOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Step';
import { TripOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Trip';
import { UserOutput } from '@la-sectoblique/septoblique-service/dist/types/models/User';
import { createAction, props } from '@ngrx/store';
import { FlattenedStep } from 'src/app/modules/features/step/models/flattened-step';
import { PartialBy } from 'src/app/utils';
import { UpdateTripPointPayload, UpdateTripStepPayload } from './trips.payload';

// Trip

export const ResetTripStore = createAction(
  '[Trips]: reset',
);


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

export const UpdateTrip = createAction(
  '[Trips] Update Trip',
  props<{ tripId: number; updatedTrip: Partial<TripOutput> }>(),
);
export const UpdateTripSuccess = createAction(
  '[Trips] Update Trip',
  props<{ newTrip: TripOutput }>(),
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
  props<{ fromIdx: number; toIdx: number; tripId: number; step: FlattenedStep }>(),
);

export const UpdateTripStepOrderSuccess = createAction(
  '[Trip] Update Trip Step Order Success',
  props<{ steps: StepOutput[] }>(),
);

// Days

export const GetStepDays = createAction(
  '[Trip] Get Step Days',
  props<{ tripId: number; stepId: number }>(),
);

export const GetStepDaysSuccess = createAction(
  '[Trip] Get Step Days Success',
  props<{ days: DayOutput[]; stepId: number; tripId: number }>(),
);

// Path

export const GetPathToStep = createAction(
  '[Trip] Get Path To Step',
  props<{ tripId: number; stepId: number }>(),
);

export const GetPathToStepSuccess = createAction(
  '[Trip] Get Path To Step Success',
  props<{ tripId: number; stepId: number; path: PathOutput }>(),
);

export const UpdatePath = createAction(
  '[Trip] Update Path',
  props<{
    tripId: number;
    stepId: number;
    path: PartialBy<PathOutput, 'createdAt' | 'description' | 'destinationId' | 'updatedAt'>;
  }>(),
);

export const UpdatePathSuccess = createAction(
  '[Trip] Update Path Success',
  props<{ tripId: number; stepId: number; path: PathOutput }>(),
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

// POINTS DAYS MANAGEMENT

export const RefreshPointsDayIds = createAction(
  '[Trip] Refresh Points Day Ids',
  props<{ tripId: number; dayId: number }>(),
);

export const RefreshPointsDayIdsSuccess = createAction(
  '[Trip] Refresh Points Day Ids Success',
  props<{ tripId: number; dayId: number; dayPoints: PointOutput[] }>(),
);

export const UpdatePointDays = createAction(
  '[Trip] Update Point Days',
  props<{ tripId: number; pointId: number; daysIds: number[] }>(),
);

export const UpdatePointDaysSuccess = createAction(
  '[Trip] Update Point Days Success',
  props<{ tripId: number; pointId: number; daysIds: number[] }>(),
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

export const RemoveTripTraveler = createAction(
  '[Trip] Remove trip travelers',
  props<{ tripId: number; userId: number }>(),
);

export const RemoveTripTravelerSuccess = createAction(
  '[Trip] Remove trip travelers Success',
  props<{ tripId: number; userId: number }>(),
);
