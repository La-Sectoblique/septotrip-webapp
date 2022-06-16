import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FileMetadataOutput, FileType } from '@la-sectoblique/septoblique-service/dist/types/models/File';
import { first } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FilesService } from '../../services/files.service';

@Component({
  selector: 'spt-file-preview',
  templateUrl: './file-preview.component.html',
  styleUrls: ['./file-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilePreviewComponent  {

  @Input() file: FileMetadataOutput;

  FileType = FileType;

  constructor(
    readonly filesService: FilesService,
  ) {}

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
