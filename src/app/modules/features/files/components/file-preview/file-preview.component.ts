import { Component, Input } from '@angular/core';
import { FileMetadataOutput, FileType } from '@la-sectoblique/septoblique-service/dist/types/models/File';

@Component({
  selector: 'spt-file-preview',
  templateUrl: './file-preview.component.html',
  styleUrls: ['./file-preview.component.scss'],
})
export class FilePreviewComponent  {

  @Input() file: FileMetadataOutput;

  FileType = FileType;

}
