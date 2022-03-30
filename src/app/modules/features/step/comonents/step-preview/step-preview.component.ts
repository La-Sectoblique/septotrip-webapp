import { Component, Input } from '@angular/core';
import { StepOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Step';

@Component({
  selector: 'spt-step-preview',
  templateUrl: './step-preview.component.html',
  styleUrls: ['./step-preview.component.scss'],
})
export class StepPreviewComponent {

  @Input() step: StepOutput;

}
