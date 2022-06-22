import { Injectable } from '@angular/core';
import { DayOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Day';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {  catchError, map, mergeMap } from 'rxjs';
import { DaysService } from 'src/app/modules/features/days/services/days.service';
import * as TripsActions from '../trips.actions';
import * as UtilsActions from '../../../utils-store/state/utils.actions';
@Injectable()
export class DaysEffects {

  // === DAYS ===

  GetStepDays$ = createEffect(() => this.actions$.pipe(
    ofType(TripsActions.GetStepDays),
    mergeMap(({ stepId, tripId }) => this.daysService.getStepDays(stepId)
      .pipe(
        map((days: DayOutput[]) =>
          TripsActions.GetStepDaysSuccess({ days, stepId, tripId }),
        ),
        catchError(() => [UtilsActions.ErrorHappenedNotify()]),
      ),
    ),
  ));



  constructor(
    private actions$: Actions,
    private daysService: DaysService,
  ) {}

}
