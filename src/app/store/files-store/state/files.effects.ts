import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from, map, mergeMap } from 'rxjs';
import * as FilesActions from './files.actions';

@Injectable()
export class FilesEffects {

  //   GetTripFiles$ = createEffect(() => this.actions$.pipe(
  //     ofType(FilesActions.GetTripFiles),
  //     mergeMap(({ tripId }) => from()
  //       .pipe(
  //         map((days: DayOutput[]) =>
  //           FilesActions.GetStepDaysSuccess({ days, stepId, tripId }),
  //         ),
  //         // @TODO: catchError(()) => CALL ERROR ACTION),
  //       ),
  //     ),
  //   ));

  constructor(
    private actions$: Actions,
  ) {}

}
