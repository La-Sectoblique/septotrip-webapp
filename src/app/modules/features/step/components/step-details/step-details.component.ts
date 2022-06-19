import { Component, Input, OnInit } from '@angular/core';
import { FileMetadataOutput } from '@la-sectoblique/septoblique-service/dist/types/models/File';
import { StepOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Step';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectTripStepFiles } from 'src/app/store/files-store/state/files.selectors';

@Component({
  selector: 'app-step-details',
  templateUrl: './step-details.component.html',
  styleUrls: ['./step-details.component.scss'],
})
export class StepDetailsComponent implements OnInit {

  @Input() step: StepOutput;

  stepFiles$: Observable<FileMetadataOutput[]>;

  constructor(
    private store: Store,
  ) { }

  ngOnInit() {
    this.stepFiles$ = this.store.select(selectTripStepFiles(this.step.tripId, this.step.id));
  }

}
