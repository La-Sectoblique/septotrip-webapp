/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable } from '@angular/core';
import { getTripSteps } from '@la-sectoblique/septoblique-service';
import { StepOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Step';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StepsService {

  getTripSteps(tripId: number): Observable<StepOutput[]> {
    return from(getTripSteps(tripId));
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
