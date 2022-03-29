import { Component } from '@angular/core';
import { Trip } from '../../models/trip';

@Component({
  selector: 'spt-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss'],
})
export class TripsComponent {

  trips: Trip[] = [
    {
      name: 'Voyage en France',
      memberCount: 5,
      stepCount: 3,
      departDate: new Date('10-04-2022'),
      arivalDate: new Date('12-04-2022'),
      pictureSrc: 'https://www.meteociel.fr/cartes_obs/archives/23-03-2022/temp2_1h-18.png',
    },
  ];

}
