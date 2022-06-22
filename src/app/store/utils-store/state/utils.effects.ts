import { Injectable } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import * as UtilsActions from './utils.actions';
import * as MapEditActions from '../../map-edit-store/state/map-edit.actions';
import * as TripsActions from '../../trips-store/state/trips.actions';
import * as FilesActions from '../../files-store/state/files.actions';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class UtilsEffects {

  ResetAllStore$ = createEffect(
    () => this.actions$.pipe(
      ofType(UtilsActions.ResetAllStore),
      switchMap(() => [
        MapEditActions.ResetMapStore(),
        TripsActions.ResetTripStore(),
        FilesActions.ResetFileStore(),
      ]),
    ),
  );

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

  ErrorHappenedNotify$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UtilsActions.ErrorHappenedNotify),
        map(() => UtilsActions.NotifyError({
          title: this.translate.instant('ErrorMessageTitle'),
          message: this.translate.instant('ErrorMessageText'),
        })),
      ),
  );

  constructor(
    private actions$: Actions,
    private nbToastrService: NbToastrService,
    private translate: TranslateService,
  ) {}

}
