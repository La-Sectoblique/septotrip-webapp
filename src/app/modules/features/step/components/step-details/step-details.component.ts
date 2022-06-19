import { Component, Input, OnInit } from '@angular/core';
import { FileMetadataOutput } from '@la-sectoblique/septoblique-service/dist/types/models/File';
import { StepOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Step';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-step-details',
  templateUrl: './step-details.component.html',
  styleUrls: ['./step-details.component.scss'],
})
export class StepDetailsComponent  {

  @Input() tripId: number;
  @Input() step: StepOutput;

  stepFiles$: Observable<FileMetadataOutput[]>;

  // constructor() { }

  // ngOnInit() {
  // }

}
