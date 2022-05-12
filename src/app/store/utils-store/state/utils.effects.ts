import { Injectable } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';
import * as UtilsActions from './utils.actions';

@Injectable()
export class UtilsEffects {

  NotifySuccess$ = createEffect(() => this.actions$.pipe(
    ofType(UtilsActions.NotifySuccess),
    tap(({ message, title }) => {
      this.nbToastrService.success(message, title);
    }),
  ));

  NotifyError$ = createEffect(() => this.actions$.pipe(
    ofType(UtilsActions.NotifyError),
    tap(({ message, title }) => {
      this.nbToastrService.danger(message, title);
    }),
  ));

  constructor(
    private actions$: Actions,
    private nbToastrService: NbToastrService,
  ) {}

}
