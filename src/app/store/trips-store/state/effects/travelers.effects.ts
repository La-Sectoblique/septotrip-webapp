import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {  map, mergeMap } from 'rxjs';
import { TravelersService } from 'src/app/modules/features/travelers/services/travelers.service';
import * as TripsActions from '../trips.actions';

@Injectable()
export class TravelersEffects {

  // === TRAVELERS ===

  GetTripTravelers$ = createEffect(() => this.actions$.pipe(
    ofType(TripsActions.GetTripTravelers),
    mergeMap(({ tripId }) => this.travelersService.getTravelers(tripId)
      .pipe(
        map((travelers) => TripsActions.GetTripTravelersSuccess({ tripId, travelers })),
      ),
    ),
  ));

  RemoveTripTraveler$ = createEffect(() => this.actions$.pipe(
    ofType(TripsActions.RemoveTripTraveler),
    mergeMap(({ tripId, userId }) => this.travelersService.removeTraveler(tripId, userId)
      .pipe(
        map(() => TripsActions.RemoveTripTravelerSuccess({ tripId, userId })),
      ),
    ),
  ));



  constructor(
    private actions$: Actions,
    private travelersService: TravelersService,
  ) {}

}
