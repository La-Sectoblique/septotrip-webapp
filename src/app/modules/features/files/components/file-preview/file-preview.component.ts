import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FileMetadataOutput, FileType } from '@la-sectoblique/septoblique-service/dist/types/models/File';
import { PointOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Point';
import { NbDialogService } from '@nebular/theme';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { combineLatest, first, map, Observable } from 'rxjs';
import {
  selectTripPoint,
  selectTripStep,
  selectTripStepByPathId,
} from 'src/app/store/trips-store/state/trips.selectors';
import { environment } from 'src/environments/environment';
import { FlattenedStep } from '../../../step/models/flattened-step';
import { FilesService } from '../../services/files.service';
import { FileLinkEditComponent } from '../file-link-edit/file-link-edit.component';

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
    private nbDialogService: NbDialogService,
    private translate: TranslateService,
  ) {}

  get fileLinkedTooltipMessage(): Observable<string> {
    return combineLatest([this.stepLinked$, this.pointLinked$, this.stepPathStepLinked$]).pipe(
      map(([step, point, stepPath]) => {
        let message = this.translate.instant('LinkedMessage');
        if (this.file.stepId) {
          message += ` ${this.translate.instant('ToTheStepMessage')} "${step.stepInstance.name}",`;
        }
        if (this.file.pointId) {
          message += ` ${this.translate.instant('ToTheInterrestPointMessage')} "${point.title}",`;
        }
        if (this.file.pathId) {
          message += ` ${this.translate.instant('ToTheTripToMessage')} "${stepPath?.stepInstance?.name}",`;
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

  openFileLinkEdit(): void {
    this.nbDialogService.open(FileLinkEditComponent, {
      context: {
        file: this.file,
      },
    });
  }

}
