import { Injectable } from '@angular/core';
import { PointOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Point';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {  map, mergeMap, switchMap } from 'rxjs';
import { PointsService } from 'src/app/modules/features/points/services/points.service';
import * as TripsActions from '../trips.actions';
import * as MapsActions from '../../../map-edit-store/state/map-edit.actions';

@Injectable()
export class PointsEffects {


  // === POINTS ===

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
        switchMap((newPoint: PointOutput) => [
          TripsActions.CreateTripPointSuccess({ point: newPoint, tripId }),
          MapsActions.AddDisplayedMapPointIds({ pointIds: [newPoint.id] }),
        ]),
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

  RefreshPointsDayIds$ = createEffect(() => this.actions$.pipe(
    ofType(TripsActions.RefreshPointsDayIds),
    mergeMap(({ tripId, dayId }) =>
      this.pointsService.getPointsByDay(dayId)
        .pipe(
          map((dayPoints) => TripsActions.RefreshPointsDayIdsSuccess({ tripId, dayId, dayPoints })),
        ),
    ),
  ));

  UpdatePointDays$ = createEffect(() => this.actions$.pipe(
    ofType(TripsActions.UpdatePointDays),
    mergeMap(({ tripId, pointId, daysIds }) =>
      this.pointsService.updatePointDays(pointId, daysIds).pipe(
        map(() =>  TripsActions.UpdatePointDaysSuccess({ tripId, pointId, daysIds })),
      ),
    ),
  ));



  constructor(
    private actions$: Actions,
    private pointsService: PointsService,
  ) {}

}
