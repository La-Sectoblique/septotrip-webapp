import { createAction, props } from '@ngrx/store';
import { NotifyPayload, ToastrPayload } from './utils.payloads';

export const NotifySuccess = createAction(
  '[Utils] Notify Success',
  props<ToastrPayload>(),
);

export const NotifyError = createAction(
  '[Utils] Notify Error',
  props<ToastrPayload>(),
);

export const Notify = createAction(
  '[Utils] Notify Error',
  props<NotifyPayload>(),
);
