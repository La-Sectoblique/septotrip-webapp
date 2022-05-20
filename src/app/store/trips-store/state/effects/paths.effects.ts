import { Injectable } from '@angular/core';
import { PathOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Path';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {  map, mergeMap } from 'rxjs';
import { PathsService } from 'src/app/modules/features/paths/services/paths.service';
import * as TripsActions from '../trips.actions';
@Injectable()
export class PathsEffects {

  // === PATHS ===

  GetPathToStep$ = createEffect(() => this.actions$.pipe(
    ofType(TripsActions.GetPathToStep),
    mergeMap(({ stepId, tripId }) => this.pathsService.getPathToStep(stepId)
      .pipe(
        map((path: PathOutput) => {
          console.log('new Path', path);
          return TripsActions.GetPathToStepSuccess({ tripId, stepId, path });
        },
        ),
        // @TODO: catchError(()) => CALL ERROR ACTION),
      ),
    ),
  ));



  constructor(
    private actions$: Actions,
    private pathsService: PathsService,
  ) {}

}
