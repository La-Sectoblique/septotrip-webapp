import { Component } from '@angular/core';

@Component({
  selector: 'spt-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss'],
})
export class TripsComponent {

  // constructor() { }

  // ngOnInit() {
  // }

  trips = [
    {
      name: 'Voyage en France',
      participantCount: 5,
      stepCount: 3,
      departDate: new Date('10-04-2022'),
      arivalDate: new Date('14-04-2022'),
    },
  ];

}
