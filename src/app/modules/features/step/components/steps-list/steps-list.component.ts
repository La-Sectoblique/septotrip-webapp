import { Component, Input, OnInit } from '@angular/core';
import { StepOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Step';
import { first, Observable } from 'rxjs';
import { StepsService } from '../../services/steps.service';

@Component({
  selector: 'spt-steps-list',
  templateUrl: './steps-list.component.html',
  styleUrls: ['./steps-list.component.scss'],
})
export class StepsListComponent implements OnInit {

  @Input() tripId: number;

  steps: Observable<StepOutput[]>;

  constructor(
    private stepsService: StepsService,
  ) {}

  ngOnInit(): void {
    this.steps = this.stepsService.getTripSteps(this.tripId);
    this.steps.subscribe((s) => {
      console.log('getted steps', s);
    });
  }

  createStep(): void {
    this.steps.pipe(first()).subscribe((s) => {
      this.stepsService.createTripSteps(this.tripId, 'Paris ?', s.length, { type: 'Point', coordinates: [47, 8] });
    });
  }


}
