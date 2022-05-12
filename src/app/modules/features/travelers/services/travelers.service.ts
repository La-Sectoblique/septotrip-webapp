import { Injectable } from '@angular/core';
import { getTravelers } from '@la-sectoblique/septoblique-service';
import { UserOutput } from '@la-sectoblique/septoblique-service/dist/types/models/User';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TravelersService {

  // constructor() { }

  getTravelers(tripId: number): Observable<UserOutput[]> {
    return from(getTravelers(tripId));
  }

}
