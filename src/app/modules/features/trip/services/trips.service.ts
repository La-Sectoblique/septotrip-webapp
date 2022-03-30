import { Injectable } from '@angular/core';
import { getUserTrips } from '@la-sectoblique/septoblique-service';
import { TripOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Trip';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TripsService {

  // constructor() { }

  getUserTrips(): Observable<TripOutput[]> {
    return from(getUserTrips());
  }

}
