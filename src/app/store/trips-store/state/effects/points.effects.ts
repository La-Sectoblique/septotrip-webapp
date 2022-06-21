import { Injectable } from '@angular/core';
import { PointOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Point';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {  catchError, map, mergeMap, switchMap } from 'rxjs';
import { PointsService } from 'src/app/modules/features/points/services/points.service';
import * as TripsActions from '../trips.actions';
import * as MapsActions from '../../../map-edit-store/state/map-edit.actions';
import * as UtilsActions from '../../../utils-store/state/utils.actions';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class PointsEffects {


  // === POINTS ===

  GetTripPoints$ = createEffect(() => this.actions$.pipe(
    ofType(TripsActions.GetTripPoints),
    mergeMap(({ tripId }) => this.pointsService.getTripPoints(tripId)
      .pipe(
        map((points: PointOutput[]) => TripsActions.GetTripPointsSuccess({ points, tripId })),
        catchError(() => [UtilsActions.ErrorHappenedNotify()]),
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
          UtilsActions.NotifySuccess({
            title: this.translate.instant('PathUpdated'),
            message: this.translate.instant('PointCreated'),
          }),
        ]),
        catchError(() => [UtilsActions.ErrorHappenedNotify()]),
      ),
    ),
  ));

  UpdateTripPoint$ = createEffect(() => this.actions$.pipe(
    ofType(TripsActions.UpdateTripPoint),
    mergeMap(({ tripId, pointId, editedPoint }) => this.pointsService.updatePoint(
      pointId, editedPoint,
    ).pipe(
      switchMap((newPoint: PointOutput) => [
        TripsActions.UpdateTripPointSuccess({ tripId, newPoint }),
        UtilsActions.NotifySuccess({
          title: this.translate.instant('UpdateDone'),
          message: this.translate.instant('PointUpdated'),
        }),
      ]),
      catchError(() => [UtilsActions.ErrorHappenedNotify()]),
    )),
  ));

  DeleteTripPoint$ = createEffect(() => this.actions$.pipe(
    ofType(TripsActions.DeleteTripPoint),
    mergeMap(({ tripId, pointId }) => this.pointsService.deletePoint(pointId)
      .pipe(
        switchMap(() => [
          TripsActions.DeleteTripPointSuccess({ pointId, tripId }),
          UtilsActions.NotifySuccess({
            title: this.translate.instant('DeletionDone'),
            message: this.translate.instant('PointDeleted'),
          }),
        ]),
        catchError(() => [UtilsActions.ErrorHappenedNotify()]),
      ),
    ),
  ));

  RefreshPointsDayIds$ = createEffect(() => this.actions$.pipe(
    ofType(TripsActions.RefreshPointsDayIds),
    mergeMap(({ tripId, dayId }) =>
      this.pointsService.getPointsByDay(dayId)
        .pipe(
          map((dayPoints) => TripsActions.RefreshPointsDayIdsSuccess({ tripId, dayId, dayPoints })),
          catchError(() => [UtilsActions.ErrorHappenedNotify()]),
        ),
    ),
  ));

  UpdatePointDays$ = createEffect(() => this.actions$.pipe(
    ofType(TripsActions.UpdatePointDays),
    mergeMap(({ tripId, pointId, daysIds }) =>
      this.pointsService.updatePointDays(pointId, daysIds).pipe(
        map(() =>  TripsActions.UpdatePointDaysSuccess({ tripId, pointId, daysIds })),
        catchError(() => [UtilsActions.ErrorHappenedNotify()]),
      ),
    ),
  ));



  constructor(
    private actions$: Actions,
    private pointsService: PointsService,
    private translate: TranslateService,
  ) {}

}
