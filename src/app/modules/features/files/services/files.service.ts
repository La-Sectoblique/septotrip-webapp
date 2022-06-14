import { Injectable } from '@angular/core';
import { getTripFiles } from '@la-sectoblique/septoblique-service';
import { FileMetadataOutput } from '@la-sectoblique/septoblique-service/dist/types/models/File';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilesService {

  getTripFiles(tripId: number): Observable<FileMetadataOutput[]> {
    return from(getTripFiles(tripId));
  }

}
