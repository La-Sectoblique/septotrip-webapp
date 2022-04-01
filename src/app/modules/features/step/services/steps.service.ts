/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable } from '@angular/core';
import { addStep, deleteStep, getTripSteps } from '@la-sectoblique/septoblique-service';
import { LocalisationPoint } from '@la-sectoblique/septoblique-service/dist/types/models/Point';
import { StepOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Step';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StepsService {

  private readonly _steps = new BehaviorSubject<StepOutput[]>([]);

  readonly steps$ = this._steps.asObservable();

  private readonly _selectedStepId = new BehaviorSubject<number>(-1);
  readonly selectedStepId$ = this._selectedStepId.asObservable();

  get steps(): StepOutput[] {
    return this._steps.getValue();
  }

  private set steps(steps: StepOutput[]){
    this._steps.next(steps);
  }

  get selectedStepId(): number {
    return this._selectedStepId.getValue();
  }

  private set selectedStepId(id: number) {
    this._selectedStepId.next(id);
  }

  setSelectedStepId(stepId: number): void {
    this.selectedStepId = stepId;
  }

  unselectStep(): void {
    this.selectedStepId = -1;
  }

  async updateSteps(tripId: number): Promise<void> {
    await getTripSteps(tripId)
      .then((stepsRes) => {
        this.steps = stepsRes;
      });
  }

  async createTripSteps(
    tripId: number,
    name: string,
    localisation: LocalisationPoint,
  ): Promise<void> {
    await addStep(tripId, { name, order: this.steps.length, localisation }).then((newStep) => {
      this.steps = [
        ...this.steps,
        newStep,
      ];
    });
  }

  async deleteStep(stepId: number): Promise<void> {
    await deleteStep(stepId).then(() => this.steps = this.steps.filter((step) => step.id !== stepId));
  }

}
