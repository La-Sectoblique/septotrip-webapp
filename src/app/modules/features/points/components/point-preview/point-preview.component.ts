import { Component, Input } from '@angular/core';
import { PointOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Point';

@Component({
  selector: 'spt-point-preview',
  templateUrl: './point-preview.component.html',
  styleUrls: ['./point-preview.component.scss'],
})
export class PointPreviewComponent {

  @Input() point: PointOutput;

}
