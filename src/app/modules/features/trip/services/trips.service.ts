import { Injectable } from '@angular/core';
import { createTrip, getUserTrips } from '@la-sectoblique/septoblique-service';
import { TripOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Trip';
import { Visibility } from '@la-sectoblique/septoblique-service/dist/types/utils/Visibility';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TripsService {

  // constructor() { }

  getUserTrips(): Observable<TripOutput[]> {
    return from(getUserTrips());
  }

  createUserTrips(name: string, visibility: Visibility): void {
    createTrip({
      name,
      visibility,
    });
  }

}
