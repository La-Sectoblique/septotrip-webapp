import { createAction, props } from '@ngrx/store';

export const GetTripFiles = createAction(
  '[Files] Get Trip Files',
  props<{ tripId: number }>(),
);
