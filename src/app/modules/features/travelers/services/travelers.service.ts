import { Injectable } from '@angular/core';
import { addTravelerToTrip, getTravelers } from '@la-sectoblique/septoblique-service';
import { UserOutput } from '@la-sectoblique/septoblique-service/dist/types/models/User';
import { ApiResponse } from '@la-sectoblique/septoblique-service/dist/types/utils/Api';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TravelersService {

  // constructor() { }

  getTravelers(tripId: number): Observable<UserOutput[]> {
    return from(getTravelers(tripId));
  }

  addTraveler(tripId: number, email: string): Observable<ApiResponse> {
    return from(addTravelerToTrip(tripId, email));
  }

}
