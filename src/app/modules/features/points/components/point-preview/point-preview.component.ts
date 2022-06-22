import { Component, Input } from '@angular/core';
import { PointOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Point';
import { NbDialogService } from '@nebular/theme';
import { PointDetailsComponent } from '../point-details/point-details.component';

@Component({
  selector: 'spt-point-preview',
  templateUrl: './point-preview.component.html',
  styleUrls: ['./point-preview.component.scss'],
})
export class PointPreviewComponent {

  @Input() point: PointOutput;
  @Input() isHighlighted: boolean;

  constructor(
    private nbDialogService: NbDialogService,
  ) {}

  openPointInfos(): void {
    this.nbDialogService.open(PointDetailsComponent, {
      context: {
        point: this.point,
      },
    });
  }

}
