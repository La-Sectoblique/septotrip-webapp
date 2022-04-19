import { Component, OnInit } from '@angular/core';
import { TripOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Trip';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GetUserTrips } from 'src/app/store/trips-store/state/trips.actions';
import { selectUserTrips } from 'src/app/store/trips-store/state/trips.selectors';

@Component({
  selector: 'spt-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss'],
})
export class TripsComponent implements OnInit {

  trips: Observable<TripOutput[] | null>;

  constructor(
    private store: Store,
  ) {}

  ngOnInit(): void {
    this.store.dispatch(GetUserTrips());
    this.trips = this.store.select(selectUserTrips());
  }

}
