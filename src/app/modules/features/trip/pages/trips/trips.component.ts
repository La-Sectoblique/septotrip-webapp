import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AnimationOptions } from 'ngx-lottie';
import { Observable } from 'rxjs';
import { GetUserTrips } from 'src/app/store/trips-store/state/trips.actions';
import { selectUserTrips } from 'src/app/store/trips-store/state/trips.selectors';
import { FlattenedTrip } from '../../models/flattened-trip';

@Component({
  selector: 'spt-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TripsComponent implements OnInit {

  trips$: Observable<FlattenedTrip[]>;

  animationOptions: AnimationOptions = {
    path: '/assets/lottie/plane-flying.json',
  };

  constructor(
    private store: Store,
  ) {}

  ngOnInit(): void {
    this.store.dispatch(GetUserTrips());
    this.trips$ = this.store.select(selectUserTrips());
  }

}
