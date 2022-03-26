import { SuccessLoginResponse } from '@la-sectoblique/septoblique-service/dist/types/utils/Api';
import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[loginModule] login',
  props<{ email: string; passord: string }>(),
);

export const loginSuccess = createAction(
  '[loginModule] loginSuccess',
  props<SuccessLoginResponse>(),
);

export const loginFail = createAction(
  '[loginModule] loginFailed',
  props<{ message: string }>(),
);
