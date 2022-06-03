import { Component, Input } from '@angular/core';
import { PathOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Path';
import { NbDialogService } from '@nebular/theme';
import { PathEditComponent } from '../path-edit/path-edit.component';

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
    this.nbDialogService.open(PathEditComponent, {
      context: {
        path: this.path,
        stepId: this.stepId,
        tripId: this.tripId,
      },
    });
  }

}
