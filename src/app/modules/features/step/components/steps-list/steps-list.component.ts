import { Component, Input } from '@angular/core';
import { StepOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Step';
import { StepsService } from '../../services/steps.service';

@Component({
  selector: 'spt-steps-list',
  templateUrl: './steps-list.component.html',
  styleUrls: ['./steps-list.component.scss'],
})
export class StepsListComponent {

  @Input() tripId: number;

  @Input() steps: StepOutput[];

  constructor(
    private stepsService: StepsService,
  ) {}


  deleteStep(stepId: number): void {
    this.stepsService.deleteStep(stepId);
  }


}
