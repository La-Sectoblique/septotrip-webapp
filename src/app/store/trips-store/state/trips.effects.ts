import { Injectable } from '@angular/core';
import { DayOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Day';
import { PointOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Point';
import { StepOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Step';
import { TripOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Trip';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import {  map, mergeMap, switchMap } from 'rxjs';
import { DaysService } from 'src/app/modules/features/days/services/days.service';
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

  DeleteUserTrip$ = createEffect(() => this.actions$.pipe(
    ofType(TripsActions.DeleteTrip),
    mergeMap(({ tripId }) => this.tripsService.deleteTrip(tripId)
      .pipe(
        map(() => TripsActions.DeleteTripSuccess({ tripId })),
      ),
    ),
  ));



  // Steps

  GetTripSteps$ = createEffect(() => this.actions$.pipe(
    ofType(TripsActions.GetTripSteps),
    mergeMap(({ tripId }) => this.stepsService.getTripSteps(tripId)
      .pipe(
        switchMap((steps: StepOutput[]) => [
          TripsActions.GetTripStepsSuccess({ steps, tripId }),
          ...(steps.map((step) =>
            TripsActions.GetStepDays({ stepId: step.id, tripId }),
          )),
        ],
        ),
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
        switchMap((newStep: StepOutput) => [
          TripsActions.CreateTripStepSuccess({ step: newStep, tripId }),
          TripsActions.GetStepDays({ stepId: newStep.id, tripId }),
        ]),
        // @TODO: catchError(() => CALL ERROR ACTION),
      ),
    ),
  ));

  UpdateTripStep$ = createEffect(() => this.actions$.pipe(
    ofType(TripsActions.UpdateTripStep),
    mergeMap(({ tripId, stepId, editedStep }) => this.stepsService.updateTripStep(stepId, editedStep)
      .pipe(
        switchMap((newStep) => [
          TripsActions.UpdateTripStepSuccess({ tripId, newStep }),
          TripsActions.GetStepDays({ stepId: newStep.id, tripId }),
        ]),
        // @TODO: catchError(() => CALL ERROR ACTION),
      )),
  ));

  DeleteTripStep$ = createEffect(() => this.actions$.pipe(
    ofType(TripsActions.DeleteTripStep),
    mergeMap(({ stepId, tripId }) => this.stepsService.deleteStep(stepId)
      .pipe(
        map(() => TripsActions.DeleteTripStepSuccess({ stepId, tripId })),
        // @TODO: catchError(() => CALL ERROR ACTION),
      )),
  ));

  // Days

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

  UpdateTripPoint$ = createEffect(() => this.actions$.pipe(
    ofType(TripsActions.UpdateTripPoint),
    mergeMap(({ tripId, pointId, editedPoint }) => this.pointsService.updatePoint(
      pointId, editedPoint,
    ).pipe(
      map((newPoint: PointOutput) => TripsActions.UpdateTripPointSuccess({ tripId, newPoint })),
      // @TODO: catchError(() => CALL ERROR ACTION),
    )),
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
    private daysService: DaysService,
    private store: Store,
  ) {}

}
