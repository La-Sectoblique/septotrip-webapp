import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StepOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Step';
import { TripOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Trip';
import { Observable } from 'rxjs';
import { StepsService } from '../../../step/services/steps.service';
import { TripsService } from '../../services/trips.service';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss'],
})
export class TripComponent implements OnInit {

  trip: Observable<TripOutput>;
  steps: Observable<StepOutput[]>;

  constructor(
    private route: ActivatedRoute,
    private tripsService: TripsService,
    private stepsService: StepsService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.trip = this.tripsService.getTrip(params['tripsId']);

      this.stepsService.updateSteps(params['tripsId']);
      this.steps = this.stepsService.steps$;
    });
  }

}
