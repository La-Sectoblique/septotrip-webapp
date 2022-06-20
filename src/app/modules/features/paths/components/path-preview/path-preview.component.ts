import { Component, Input } from '@angular/core';
import { PathOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Path';
import { NbDialogService } from '@nebular/theme';
import { PathDetailsComponent } from '../path-details/path-details.component';

@Component({
  selector: 'spt-path-preview',
  templateUrl: './path-preview.component.html',
  styleUrls: ['./path-preview.component.scss'],
})
export class PathPreviewComponent  {

  @Input() path: PathOutput;
  @Input() stepId: number;
  @Input() tripId: number;

  constructor(
    private nbDialogService: NbDialogService,
  ) { }

  openPathEdition(): void {
    this.nbDialogService.open(PathDetailsComponent, {
      context: {
        path: this.path,
        tripId: this.tripId,
      },
    });
  }

}
