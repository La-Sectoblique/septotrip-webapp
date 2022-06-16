import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FileMetadataOutput, FileType } from '@la-sectoblique/septoblique-service/dist/types/models/File';
import { NbDialogService } from '@nebular/theme';
import { Store } from '@ngrx/store';
import { DeleteTripFile } from 'src/app/store/files-store/state/files.actions';
import { environment } from 'src/environments/environment';
import { AddFilesComponent } from '../add-files/add-files.component';

@Component({
  selector: 'spt-files-list',
  templateUrl: './files-list.component.html',
  styleUrls: ['./files-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilesListComponent {

  @Input() tripId: number;
  @Input() files: FileMetadataOutput[];

  apiUrl = environment.baseURL;

  FileType = FileType;

  constructor(
    private nbDialogService: NbDialogService,
    private store: Store,
  ) { }

  openAddFileModal(): void {
    this.nbDialogService.open(AddFilesComponent, { context: {
      tripId: this.tripId,
    } });
  }

  deleteFile(fileId: number): void {
    this.store.dispatch(DeleteTripFile({ tripId: this.tripId, fileId }));
  }

}
