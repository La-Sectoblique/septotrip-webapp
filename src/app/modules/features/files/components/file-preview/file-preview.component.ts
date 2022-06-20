import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FileMetadataOutput, FileType } from '@la-sectoblique/septoblique-service/dist/types/models/File';
import { PointOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Point';
import { Store } from '@ngrx/store';
import { combineLatest, first, map, Observable } from 'rxjs';
import {
  selectTripPoint,
  selectTripStep,
  selectTripStepByPathId,
} from 'src/app/store/trips-store/state/trips.selectors';
import { environment } from 'src/environments/environment';
import { FlattenedStep } from '../../../step/models/flattened-step';
import { FilesService } from '../../services/files.service';

@Component({
  selector: 'spt-file-preview',
  templateUrl: './file-preview.component.html',
  styleUrls: ['./file-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilePreviewComponent implements OnInit  {

  @Input() file: FileMetadataOutput;

  FileType = FileType;

  stepLinked$: Observable<FlattenedStep>;
  pointLinked$: Observable<PointOutput>;
  stepPathStepLinked$: Observable<FlattenedStep>;

  constructor(
    readonly filesService: FilesService,
    private store: Store,
  ) {}

  get fileLinkedTooltipMessage(): Observable<string> {
    return combineLatest([this.stepLinked$, this.pointLinked$, this.stepPathStepLinked$]).pipe(
      map(([step, point, stepPath]) => {
        let message = 'Lié';
        if (this.file.stepId) {
          message += ` à l'étape "${step.stepInstance.name}",`;
        }
        if (this.file.pointId) {
          message += ` au point d'intérêt "${point.title}",`;
        }
        if (this.file.pathId) {
          message += ` au trajet vers "${stepPath?.stepInstance?.name}",`;
        }

        message = message.substring(0, message.length - 1);
        return message;
      }),
    );
  }

  ngOnInit(): void {
    this.stepLinked$ = this.store.select(
      selectTripStep(this.file.tripId, this.file.stepId || 0),
    ) as Observable<FlattenedStep>;
    this.pointLinked$ = this.store.select(
      selectTripPoint(this.file.tripId, this.file.pointId || 0),
    ) as Observable<PointOutput>;
    this.stepPathStepLinked$ = this.store.select(
      selectTripStepByPathId(this.file.tripId, this.file.pathId || 0),
    ) as Observable<FlattenedStep>;
  }


  download(): void {
    this.filesService.getFileLink(this.file.tripId, this.file.id)
      .pipe(first())
      .subscribe((url) => {
        window.open(url, '_blank');
      });
  }

  getUrl(): string {
    return `${environment.baseURL}/files/${this.file.tempFileId}`;
  }

}
