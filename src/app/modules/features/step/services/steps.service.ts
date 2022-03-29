import { Injectable } from '@angular/core';
import { addStep, getTripSteps } from '@la-sectoblique/septoblique-service';
import { LocalisationPoint } from '@la-sectoblique/septoblique-service/dist/types/models/Point';
import { StepOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Step';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StepsService {

  // constructor() { }

  getTripSteps(tripId: number): Observable<StepOutput[]> {
    return from(getTripSteps(tripId));
  }

  createTripSteps(
    tripId: number,
    name: string,
    order: number,
    localisation: LocalisationPoint,
  ): Observable<StepOutput> {
    return from(
      addStep(tripId, {
        name,
        order,
        localisation,
      }),
    );
  }

}
