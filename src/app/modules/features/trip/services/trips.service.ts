import { Injectable } from '@angular/core';
import { createTrip, deleteTrip, getTripById, getUserTrips, updateTrip } from '@la-sectoblique/septoblique-service';
import { TripAttributes, TripOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Trip';
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

  createUserTrips(name: string, visibility: Visibility): Observable<TripOutput> {
    return from(createTrip({
      name,
      visibility,
    }));
  }

  getTrip(id: number): Observable<TripOutput> {
    return from(getTripById(id));
  }

  updateTrip(tripId: number, updatedTrip: Partial<TripAttributes>): Observable<TripOutput> {
    return from(updateTrip(tripId, updatedTrip));
  }

  deleteTrip(id: number): Observable<any> {
    return from(deleteTrip(id));
  }

}
