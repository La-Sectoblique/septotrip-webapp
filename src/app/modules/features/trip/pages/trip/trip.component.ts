import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PointOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Point';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GetTrip, GetTripPoints, GetTripSteps } from 'src/app/store/trips-store/state/trips.actions';
import { selectTripPoints, selectTripSteps, selectUserTrip } from 'src/app/store/trips-store/state/trips.selectors';
import { FlattenedStep } from '../../../step/models/flattened-step';
import { StepsService } from '../../../step/services/steps.service';
import { FlattenedTrip } from '../../models/flattened-trip';
import { TripsService } from '../../services/trips.service';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss'],
})
export class TripComponent implements OnInit {

  trip$: Observable<FlattenedTrip>;
  steps$: Observable<FlattenedStep[]>;
  points$: Observable<PointOutput[]>;

  constructor(
    private route: ActivatedRoute,
    private tripsService: TripsService,
    private stepsService: StepsService,
    private store: Store,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const { tripId } = params;

      this.store.dispatch(GetTrip({ tripId }));
      this.trip$ = this.store.select(selectUserTrip(tripId));

      this.store.dispatch(GetTripSteps({ tripId }));
      this.steps$ = this.store.select(selectTripSteps(tripId));

      this.store.dispatch(GetTripPoints({ tripId }));
      this.points$ = this.store.select(selectTripPoints(tripId));
    });
  }

}
