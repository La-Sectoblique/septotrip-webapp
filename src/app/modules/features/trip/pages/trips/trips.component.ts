import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TripOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Trip';
import { Observable } from 'rxjs';
import { TripsService } from '../../services/trips.service';

@Component({
  selector: 'spt-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss'],
})
export class TripsComponent implements OnInit {

  trips: Observable<TripOutput[]>;

  constructor(
    private tripsService: TripsService,
  ) {}

  ngOnInit(): void {
    this.trips = this.tripsService.getUserTrips();
  }

}
