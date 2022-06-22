import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FileMetadataOutput, FileType } from '@la-sectoblique/septoblique-service/dist/types/models/File';
import { NbDialogService } from '@nebular/theme';
import { Store } from '@ngrx/store';
import { AnimationOptions } from 'ngx-lottie';
import { DeleteTripFile } from 'src/app/store/files-store/state/files.actions';
import { environment } from 'src/environments/environment';
import { AddFilesComponent } from '../add-files/add-files.component';

@Component({
  selector: 'spt-files-list',
  templateUrl: './files-list.component.html',
  styleUrls: ['./files-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilesListComponent implements OnChanges {

  @Input() tripId: number;
  @Input() files: FileMetadataOutput[];

  @Input() stepId?: number;
  @Input() pointId?: number;
  @Input() pathId?: number;

  apiUrl = environment.baseURL;

  FileType = FileType;

  isPhotoTabActive: boolean;

  emptyPictureAnimation: AnimationOptions = {
    path: '/assets/lottie/picture-empty-state.json',
  };

  emptyDocumentAnimation: AnimationOptions = {
    path: '/assets/lottie/document-empty-state.json',
  };

  constructor(
    private nbDialogService: NbDialogService,
    private store: Store,
  ) { }

  ngOnChanges({ files }: SimpleChanges): void {
    const docs = (files.currentValue as FileMetadataOutput[]).filter((file) => file.fileType === FileType.DOCUMENT);
    const pictures = (files.currentValue as FileMetadataOutput[]).filter((file) => file.fileType === FileType.PHOTO);

    if (pictures.length === 0 && docs.length > 0) {
      this.isPhotoTabActive = false;
      return;
    }
    this.isPhotoTabActive = true;
  }

  openAddFileModal(): void {
    this.nbDialogService.open(AddFilesComponent, { context: {
      tripId: this.tripId,
      stepId: this.stepId,
      pointId: this.pointId,
      pathId: this.pathId,
    } });
  }

  editFile(file: FileMetadataOutput): void {
    this.nbDialogService.open(AddFilesComponent, {
      context: {
        tripId: this.tripId,
        isEditMode: true,
        fileMetadataToEdit: file,
      },
    });
  }

  deleteFile(fileId: number): void {
    this.store.dispatch(DeleteTripFile({ tripId: this.tripId, fileId }));
  }

}
