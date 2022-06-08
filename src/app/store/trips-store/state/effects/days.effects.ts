import { Injectable } from '@angular/core';
import { DayOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Day';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {  map, mergeMap } from 'rxjs';
import { DaysService } from 'src/app/modules/features/days/services/days.service';
import * as TripsActions from '../trips.actions';
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
        // @TODO: catchError(()) => CALL ERROR ACTION),
      ),
    ),
  ));



  constructor(
    private actions$: Actions,
    private daysService: DaysService,
  ) {}

}
