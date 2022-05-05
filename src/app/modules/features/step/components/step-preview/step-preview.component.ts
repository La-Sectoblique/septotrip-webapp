import { Component, Input } from '@angular/core';
import { StepOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Step';
import { FlattenedStep } from '../../models/flattened-step';

@Component({
  selector: 'spt-step-preview',
  templateUrl: './step-preview.component.html',
  styleUrls: ['./step-preview.component.scss'],
})
export class StepPreviewComponent {

  @Input() step: FlattenedStep;
  @Input() isDetailedModeEnabled = false;

  switchMode(): void {
    this.isDetailedModeEnabled = !this.isDetailedModeEnabled;
  }

}
