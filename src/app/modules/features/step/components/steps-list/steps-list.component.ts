import { Component, Input, OnInit } from '@angular/core';
import { StepOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Step';
import { Observable } from 'rxjs';
import { StepsService } from '../../services/steps.service';

@Component({
  selector: 'spt-steps-list',
  templateUrl: './steps-list.component.html',
  styleUrls: ['./steps-list.component.scss'],
})
export class StepsListComponent implements OnInit {

  @Input() tripId: number;

  @Input() steps: StepOutput[];

  selectedStepId$: Observable<number>;

  constructor(
    private stepsService: StepsService,
  ) {}

  ngOnInit(): void {
    this.selectedStepId$ = this.stepsService.selectedStepId$;
  }

  deleteStep(stepId: number): void {
    this.stepsService.deleteStep(stepId);
  }

  selectStep(stepId: number): void {

  }


}
