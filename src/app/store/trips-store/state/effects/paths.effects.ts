import { Injectable } from '@angular/core';
import { PathOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Path';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {  catchError, map, mergeMap, switchMap } from 'rxjs';
import { PathsService } from 'src/app/modules/features/paths/services/paths.service';
import * as TripsActions from '../trips.actions';
import * as UtilsActions from '../../../utils-store/state/utils.actions';
import { TranslateService } from '@ngx-translate/core';
@Injectable()
export class PathsEffects {

  // === PATHS ===

  GetPathToStep$ = createEffect(() => this.actions$.pipe(
    ofType(TripsActions.GetPathToStep),
    mergeMap(({ stepId, tripId }) => this.pathsService.getPathToStep(stepId)
      .pipe(
        map((path: PathOutput) =>
          TripsActions.GetPathToStepSuccess({ tripId, stepId, path })
          ,
        ),
        catchError(() => [UtilsActions.ErrorHappenedNotify()]),
      ),
    ),
  ));

  UpdatePath$ = createEffect(() => this.actions$.pipe(
    ofType(TripsActions.UpdatePath),
    mergeMap(({ tripId, stepId, path }) => this.pathsService.updatePath(path.id, path)
      .pipe(
        switchMap((newPath: PathOutput) => [
          TripsActions.UpdatePathSuccess({ tripId, stepId, path: newPath }),

          UtilsActions.NotifySuccess({
            title: this.translate.instant('UpdateDone'),
            message: this.translate.instant('PathUpdated'),
          }),
        ]),
        catchError(() => [UtilsActions.ErrorHappenedNotify()]),
      )),
  ));



  constructor(
    private actions$: Actions,
    private pathsService: PathsService,
    private translate: TranslateService,
  ) {}

}
