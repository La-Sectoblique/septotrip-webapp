import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FileMetadataAttributes, FileMetadataOutput } from '@la-sectoblique/septoblique-service/dist/types/models/File';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UpdateTripFile } from 'src/app/store/files-store/state/files.actions';
import { selectTripPoints, selectTripSteps } from 'src/app/store/trips-store/state/trips.selectors';
import { TripPoint } from '../../../points/models/points-interfaces';
import { FlattenedStep } from '../../../step/models/flattened-step';

@Component({
  selector: 'spt-file-link-edit',
  templateUrl: './file-link-edit.component.html',
  styleUrls: ['./file-link-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileLinkEditComponent implements OnInit {

  @Input() file: FileMetadataOutput;

  tripSteps$: Observable<FlattenedStep[]>;
  tripPoints$: Observable<TripPoint[]>;

  constructor(
    private store: Store,
  ) { }

  ngOnInit() {
    this.tripSteps$ = this.store.select(selectTripSteps(this.file.tripId));
    this.tripPoints$ = this.store.select(selectTripPoints(this.file.tripId));
  }

  updateFile(fileUpdates: Partial<FileMetadataAttributes>): void {
    this.store.dispatch(UpdateTripFile({
      fileId: this.file.id,
      metadata: {
        ...this.file,
        ...fileUpdates,
      },
    }));
  }

}
