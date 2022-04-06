import { Injectable } from '@angular/core';
import { TripOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Trip';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {  map, mergeMap } from 'rxjs';
import { TripsService } from 'src/app/modules/features/trip/services/trips.service';
import * as TripsActions from './trips.actions';

@Injectable()
export class TripsEffects {

  GetUserTrips$ = createEffect(() => this.actions$.pipe(
    ofType(TripsActions.GetUserTrips),
    mergeMap(() => this.tripsService.getUserTrips()
      .pipe(
        map((trips: TripOutput[]) => TripsActions.GetUserTripsSuccess({ trips })),
        // catchError(() => CALL ERROR ACTION),
      ),
    ),
  ));

  constructor(
    private actions$: Actions,
    private tripsService: TripsService,
  ) {}

}
