import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GetUserTrips } from 'src/app/store/trips-store/state/trips.actions';
import { selectUserTrips } from 'src/app/store/trips-store/state/trips.selectors';
import { FlattenedTrip } from '../../models/flattened-trip';

@Component({
  selector: 'spt-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss'],
})
export class TripsComponent implements OnInit {

  trips$: Observable<FlattenedTrip[]>;

  constructor(
    private store: Store,
  ) {}

  ngOnInit(): void {
    this.store.dispatch(GetUserTrips());
    this.trips$ = this.store.select(selectUserTrips());

    this.trips$.subscribe((trips) => console.log('store trips', trips));
  }

}
