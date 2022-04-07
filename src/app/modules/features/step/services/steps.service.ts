/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable } from '@angular/core';
import { addStep, deleteStep, getTripSteps } from '@la-sectoblique/septoblique-service';
import { LocalisationPoint } from '@la-sectoblique/septoblique-service/dist/types/models/Point';
import { StepOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Step';
import { from, Observable } from 'rxjs';

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

  // private readonly _steps = new BehaviorSubject<StepOutput[]>([]);

  // readonly steps$ = this._steps.asObservable();

  // get steps(): StepOutput[] {
  //   return this._steps.getValue();
  // }

  // private set steps(steps: StepOutput[]){
  //   this._steps.next(steps);
  // }

  // async updateSteps(tripId: number): Promise<void> {
  //   await getTripSteps(tripId)
  //     .then((stepsRes) => {
  //       this.steps = stepsRes;
  //     });
  // }

  // async createTripSteps(
  //   tripId: number,
  //   name: string,
  //   duration: number,
  //   localisation: LocalisationPoint,
  // ): Promise<void> {
  //   await addStep(tripId, { name, order: this.steps.length, duration, localisation }).then((newStep) => {
  //   });
  // }

  // async deleteStep(stepId: number): Promise<void> {
  //   await deleteStep(stepId).then(() => this.steps = this.steps.filter((step) => step.id !== stepId));
  // }



}
