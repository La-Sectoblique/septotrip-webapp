import { Pipe, PipeTransform } from '@angular/core';
import { FileMetadataOutput, FileType } from '@la-sectoblique/septoblique-service/dist/types/models/File';

@Pipe({ name: 'filterDocumentByFileType' })
export class FilterDocumentByFileTypePipe implements PipeTransform {

  transform(files: FileMetadataOutput[], fileType: FileType): FileMetadataOutput[] {
    return files.filter((file) => file.fileType === fileType);
  }

}
