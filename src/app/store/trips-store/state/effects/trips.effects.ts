import { Injectable } from '@angular/core';
import { TripOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Trip';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {  map, mergeMap, switchMap } from 'rxjs';
import { TripsService } from 'src/app/modules/features/trip/services/trips.service';
import * as TripsActions from '../trips.actions';
import * as UtilsActions from '../../../utils-store/state/utils.actions';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class TripsEffects {

  // === TRIPS ===

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

  UpdateTrip$ = createEffect(() => this.actions$.pipe(
    ofType(TripsActions.UpdateTrip),
    mergeMap(({ tripId, updatedTrip }) => this.tripsService.updateTrip(tripId, updatedTrip)
      .pipe(
        switchMap((newTrip) => [
          TripsActions.UpdateTripSuccess({ newTrip }),
          UtilsActions.NotifySuccess({
            title: this.translate.instant('UpdateDone'),
            message: this.translate.instant('TripUpdated'),
          }),
        ]),
      )),
  ));

  DeleteUserTrip$ = createEffect(() => this.actions$.pipe(
    ofType(TripsActions.DeleteTrip),
    mergeMap(({ tripId }) => this.tripsService.deleteTrip(tripId)
      .pipe(
        switchMap(() => [
          TripsActions.DeleteTripSuccess({ tripId }),
          UtilsActions.NotifySuccess({
            title: this.translate.instant('DeletionDone'),
            message: this.translate.instant('TripDeleted'),
          }),
        ]),
        // catchError(() =>  [
        //   UtilsActions.NotifyError({
        //     title: 'Echec de la supression',
        //     message: 'le voyage n\'a pas été supprimé',
        //   }),
        // ]),
      ),
    ),
  ));



  constructor(
    private actions$: Actions,
    private tripsService: TripsService,
    private translate: TranslateService,
  ) {}

}
