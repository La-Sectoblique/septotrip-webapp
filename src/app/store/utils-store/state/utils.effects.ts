import { Injectable } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs';
import * as UtilsActions from './utils.actions';

@Injectable()
export class UtilsEffects {

  NotifySuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UtilsActions.NotifySuccess),
        map(({
          message, title,
        }) =>
          this.nbToastrService.success(message, title),
        ),
      ),
    { dispatch: false },
  );

  NotifyError$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UtilsActions.NotifyError),
        map(({
          message, title,
        }) =>
          this.nbToastrService.danger(message, title),
        ),
      ),
    { dispatch: false },
  );

  constructor(
    private actions$: Actions,
    private nbToastrService: NbToastrService,
  ) {}

}
