import { createAction, props } from '@ngrx/store';
import { ToastrPayload } from './utils.payloads';

export const NotifySuccess = createAction(
  '[Utils] Notify Success',
  props<ToastrPayload>(),
);

export const NotifyInfo = createAction(
  '[Utils] Notify Info',
  props<ToastrPayload>(),
);

export const NotifyError = createAction(
  '[Utils] Notify Error',
  props<ToastrPayload>(),
);

export const ErrorHappenedNotify = createAction(
  '[Utils] Error Happened Notify',
);

export const ResetAllStore = createAction(
  '[Utils] Reset all store',
);
