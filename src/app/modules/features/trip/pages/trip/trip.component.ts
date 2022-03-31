import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TripOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Trip';
import { Observable } from 'rxjs';
import { TripsService } from '../../services/trips.service';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss'],
})
export class TripComponent implements OnInit {

  trip: Observable<TripOutput>;

  constructor(
    private tripsService: TripsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.trip = this.tripsService.getTrip(params['tripsId']);
    });

  }

}
