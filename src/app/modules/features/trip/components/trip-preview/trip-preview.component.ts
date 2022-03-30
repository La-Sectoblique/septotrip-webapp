import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TripOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Trip';
import { parseDateToString } from 'src/app/modules/shared/utils';


@Component({
  selector: 'spt-trip-preview',
  templateUrl: './trip-preview.component.html',
  styleUrls: ['./trip-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TripPreviewComponent {

  @Input() trip: TripOutput;
  parseDate = parseDateToString;

  fakePictureSrc = 'https://www.meteociel.fr/cartes_obs/archives/23-03-2022/temp2_1h-18.png';

}
