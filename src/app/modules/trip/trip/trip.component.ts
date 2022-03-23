import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'septo-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TripComponent {

  // @Input() name: string;
  // @Input() personCount: number;
  // @Input() stepCount: number;
  // @Input() departDate: Date;
  // @Input() arivalDate: Date;

}
