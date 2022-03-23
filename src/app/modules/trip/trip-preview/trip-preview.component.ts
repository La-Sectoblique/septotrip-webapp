import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'spt-trip-preview',
  templateUrl: './trip-preview.component.html',
  styleUrls: ['./trip-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TripPreviewComponent {

  @Input() name: string;

}
