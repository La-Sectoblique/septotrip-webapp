import { Injectable } from '@angular/core';
import { TripOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Trip';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {  map, mergeMap, switchMap } from 'rxjs';
import { TripsService } from 'src/app/modules/features/trip/services/trips.service';
import * as TripsActions from '../trips.actions';

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

  DeleteUserTrip$ = createEffect(() => this.actions$.pipe(
    ofType(TripsActions.DeleteTrip),
    mergeMap(({ tripId }) => this.tripsService.deleteTrip(tripId)
      .pipe(
        switchMap(() => [
          TripsActions.DeleteTripSuccess({ tripId }),
          // UtilsActions.NotifySuccess({
          //   title: 'Supression réussie',
          //   message: 'Le voyage a été supprimé',
          // }),
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
  ) {}

}
