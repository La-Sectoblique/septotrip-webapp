import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PointOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Point';
import { UserOutput } from '@la-sectoblique/septoblique-service/dist/types/models/User';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DeleteTrip,
  GetTrip,
  GetTripPoints,
  GetTripSteps,
  GetTripTravelers,
} from 'src/app/store/trips-store/state/trips.actions';
import { selectTripPoints,
  selectTripSteps,
  selectTripTravelers,
  selectUserTrip,
} from 'src/app/store/trips-store/state/trips.selectors';
import { FlattenedStep } from '../../../step/models/flattened-step';
import { FlattenedTrip } from '../../models/flattened-trip';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss'],
})
export class TripComponent implements OnInit {

  trip$: Observable<FlattenedTrip>;
  steps$: Observable<FlattenedStep[]>;
  points$: Observable<PointOutput[]>;
  travelers$: Observable<UserOutput[]>;

  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private router: Router,
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

      this.store.dispatch(GetTripTravelers({ tripId }));
      this.travelers$ = this.store.select(selectTripTravelers(tripId));
    });
  }

  getDaysIds(steps: FlattenedStep[]): number[] {
    const daysIds: number[] = [];

    steps.forEach((step) => {
      step.daysInstance?.forEach((day) => {
        daysIds.push(day.id);
      });
    });

    return daysIds;
  }

  deleteTrip(tripId: number): void {
    this.store.dispatch(DeleteTrip({ tripId }));
    this.router.navigate(['/trips']);
  }

}
