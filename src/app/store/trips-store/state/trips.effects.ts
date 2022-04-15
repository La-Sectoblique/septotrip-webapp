import { Injectable } from '@angular/core';
import { PointOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Point';
import { StepOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Step';
import { TripOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Trip';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import {  map, mergeMap } from 'rxjs';
import { PointsService } from 'src/app/modules/features/points/services/points.service';
import { StepsService } from 'src/app/modules/features/step/services/steps.service';
import { TripsService } from 'src/app/modules/features/trip/services/trips.service';
import * as TripsActions from './trips.actions';
import { selectTripSteps } from './trips.selectors';

@Injectable()
export class TripsEffects {

  // Trips

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

  // Steps

  GetTripSteps$ = createEffect(() => this.actions$.pipe(
    ofType(TripsActions.GetTripSteps),
    mergeMap(({ tripId }) => this.stepsService.getTripSteps(tripId)
      .pipe(
        map((steps: StepOutput[]) => TripsActions.GetTripStepsSuccess({ steps, tripId })),
        // @TODO: catchError(() => CALL ERROR ACTION),
      ),
    ),
  ));

  CreateTripStep$ = createEffect(() => this.actions$.pipe(
    ofType(TripsActions.CreateTripStep),
    concatLatestFrom(({ tripId }) => this.store.select(selectTripSteps(tripId))),
    mergeMap(([{ tripId, step }, steps]) => this.stepsService.createTripStep(
      tripId,
      step.name,
      step.duration,
      steps.length,
      step.localisation,
    )
      .pipe(
        map((newStep: StepOutput) => TripsActions.CreateTripStepSuccess({ step: newStep, tripId })),
        // @TODO: catchError(() => CALL ERROR ACTION),
      ),
    ),
  ));

  DeleteTripStep$ = createEffect(() => this.actions$.pipe(
    ofType(TripsActions.DeleteTripStep),
    mergeMap(({ stepId, tripId }) => this.stepsService.deleteStep(stepId)
      .pipe(
        map(() => TripsActions.DeleteTripStepSuccess({ stepId, tripId })),
        // @TODO: catchError(() => CALL ERROR ACTION),
      ),
    ),
  ));

  // Points

  GetTripPoints$ = createEffect(() => this.actions$.pipe(
    ofType(TripsActions.GetTripPoints),
    mergeMap(({ tripId }) => this.pointsService.getTripPoints(tripId)
      .pipe(
        map((points: PointOutput[]) => TripsActions.GetTripPointsSuccess({ points, tripId })),
        // @TODO: catchError(() => CALL ERROR ACTION),
      ),
    ),
  ));

  CreateTripPoint$ = createEffect(() => this.actions$.pipe(
    ofType(TripsActions.CreateTripPoint),
    mergeMap(({ tripId, point }) => this.pointsService.createTripPoint(
      tripId,
      point.title,
      point.localisation,
      point.description,
    )
      .pipe(
        map((newPoint: PointOutput) => TripsActions.CreateTripPointSuccess({ point: newPoint, tripId })),
        // @TODO: catchError(() => CALL ERROR ACTION),
      ),
    ),
  ));

  DeleteTripPoint$ = createEffect(() => this.actions$.pipe(
    ofType(TripsActions.DeleteTripPoint),
    mergeMap(({ tripId, pointId }) => this.pointsService.deletePoint(pointId)
      .pipe(
        map(() => TripsActions.DeleteTripPointSuccess({ pointId, tripId })),
        // @TODO: catchError(() => CALL ERROR ACTION),
      ),
    ),
  ));



  constructor(
    private actions$: Actions,
    private tripsService: TripsService,
    private stepsService: StepsService,
    private pointsService: PointsService,
    private store: Store,
  ) {}

}
