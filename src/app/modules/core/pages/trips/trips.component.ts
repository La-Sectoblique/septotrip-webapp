import { Component } from '@angular/core';
import { Trip } from 'src/app/modules/trip/models/trip';

@Component({
  selector: 'spt-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss'],
})
export class TripsComponent {

  constructor() { }

  ngOnInit() {
  }
  trips: Trip[] = [
    {
      name: 'Voyage en France',
      memberCount: 5,
      stepCount: 3,
      departDate: new Date('10-04-2022'),
      arivalDate: new Date('12-04-2022'),
    },
  ];

}
