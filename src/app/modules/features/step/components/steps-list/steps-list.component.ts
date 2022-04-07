import { Component, Input } from '@angular/core';
import { StepOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Step';
import { Store } from '@ngrx/store';
import { DeleteTripStep } from 'src/app/store/trips-store/state/trips.actions';
import { FlattenedStep } from '../../models/flattened-step';
import { StepsService } from '../../services/steps.service';

@Component({
  selector: 'spt-steps-list',
  templateUrl: './steps-list.component.html',
  styleUrls: ['./steps-list.component.scss'],
})
export class StepsListComponent {

  @Input() tripId: number;

  @Input() steps: FlattenedStep[];

  constructor(
    private store: Store,
  ) {}


  deleteStep(stepId: number): void {
    this.store.dispatch(DeleteTripStep({ tripId: this.tripId, stepId }));
  }


}
