/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable } from '@angular/core';
import { addStep, deleteStep, getTripSteps, updateStep } from '@la-sectoblique/septoblique-service';
import { LocalisationPoint } from '@la-sectoblique/septoblique-service/dist/types/models/Point';
import { StepOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Step';
import { from, Observable } from 'rxjs';
import { EditedStep, UpdateTripStepPayload } from 'src/app/store/trips-store/state/trips.payload';

@Injectable({
  providedIn: 'root',
})
export class StepsService {

  getTripSteps(tripId: number): Observable<StepOutput[]> {
    return from(getTripSteps(tripId));
  }

  createTripStep(
    tripId: number,
    name: string,
    duration: number,
    order: number,
    localisation: LocalisationPoint,
  ): Observable<StepOutput> {
    return from(addStep(tripId, { name, order, duration, localisation }));
  }

  deleteStep(stepId: number): Observable<void> {
    return from(deleteStep(stepId));
  }

  updateTripStep(stepId: number, newStep: EditedStep): Observable<StepOutput> {
    return from(updateStep(stepId, newStep));
  }

}
