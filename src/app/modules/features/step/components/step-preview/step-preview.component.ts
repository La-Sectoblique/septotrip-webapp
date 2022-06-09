import { Component, Input } from '@angular/core';
import { PointOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Point';
import { FlattenedStep } from '../../models/flattened-step';

@Component({
  selector: 'spt-step-preview',
  templateUrl: './step-preview.component.html',
  styleUrls: ['./step-preview.component.scss'],
})
export class StepPreviewComponent {

  @Input() step: FlattenedStep;
  @Input() stepPoints: PointOutput[];
  @Input() isDetailedModeEnabled = false;
  @Input() isHighlighted = false;

  switchMode(): void {
    this.isDetailedModeEnabled = !this.isDetailedModeEnabled;
  }

}
