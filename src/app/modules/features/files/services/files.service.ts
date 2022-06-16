import { Injectable } from '@angular/core';
import { getFileLink, getTripFiles, uploadFile } from '@la-sectoblique/septoblique-service';
import { FileMetadataAttributes, FileMetadataOutput } from '@la-sectoblique/septoblique-service/dist/types/models/File';
import { FileFormat } from '@la-sectoblique/septoblique-service/dist/utils/FormData';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilesService {

  getTripFiles(tripId: number): Observable<FileMetadataOutput[]> {
    return from(getTripFiles(tripId));
  }

  uploadFile(options: FileMetadataAttributes, file: FileFormat): Observable<FileMetadataOutput> {
    return from(uploadFile(options, file));
  }

  getFileLink(tripId: number, fileId: number): Observable<string> {
    return from(getFileLink(tripId, fileId));
  }

}
