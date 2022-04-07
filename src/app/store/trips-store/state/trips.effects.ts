import { Injectable } from '@angular/core';
import { StepOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Step';
import { TripOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Trip';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {  map, mergeMap } from 'rxjs';
import { StepsService } from 'src/app/modules/features/step/services/steps.service';
import { TripsService } from 'src/app/modules/features/trip/services/trips.service';
import * as TripsActions from './trips.actions';

@Injectable()
export class TripsEffects {

  GetUserTrips$ = createEffect(() => this.actions$.pipe(
    ofType(TripsActions.GetUserTrips),
    mergeMap(() => this.tripsService.getUserTrips()
      .pipe(
        map((trips: TripOutput[]) => TripsActions.GetUserTripsSuccess({ trips })),
        // @TODO: catchError(() => CALL ERROR ACTION),
      ),
    ),
  ));

  GetUserTrip$ = createEffect(() => this.actions$.pipe(
    ofType(TripsActions.GetTrip),
    mergeMap(({ tripId }) => this.tripsService.getTrip(tripId)
      .pipe(
        map((trip: TripOutput) => TripsActions.GetTripSuccess({ trip })),
        // @TODO: catchError(() => CALL ERROR ACTION),
      ),
    ),
  ));

  GetTripSteps$ = createEffect(() => this.actions$.pipe(
    ofType(TripsActions.GetTripSteps),
    mergeMap(({ tripId }) => this.stepsService.getTripSteps(tripId)
      .pipe(
        map((steps: StepOutput[]) => TripsActions.GetTripStepsSuccess({ steps, tripId })),
        // @TODO: catchError(() => CALL ERROR ACTION),
      ),
    ),
  ));

  constructor(
    private actions$: Actions,
    private tripsService: TripsService,
    private stepsService: StepsService,
  ) {}

}
