import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { parseDateToString } from '../../shared/utils';
import { Trip } from '../models/trip';

@Component({
  selector: 'spt-trip-preview',
  templateUrl: './trip-preview.component.html',
  styleUrls: ['./trip-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TripPreviewComponent {


  @Input() trip: Trip;
  parseDate = parseDateToString;

}
