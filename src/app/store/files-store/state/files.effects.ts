import { Injectable } from '@angular/core';
import { FileMetadataOutput } from '@la-sectoblique/septoblique-service/dist/types/models/File';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import { FilesService } from 'src/app/modules/features/files/services/files.service';
import * as FilesActions from './files.actions';

@Injectable()
export class FilesEffects {

  GetTripFiles$ = createEffect(() => this.actions$.pipe(
    ofType(FilesActions.GetTripFiles),
    mergeMap(({ tripId }) => this.filesService.getTripFiles(tripId)
      .pipe(
        map((files: FileMetadataOutput[]) =>
          FilesActions.GetTripFilesSuccess({ tripId, files }),
        ),
        // @TODO: catchError(()) => CALL ERROR ACTION),
      ),
    ),
  ));

  UploadTripFile$ = createEffect(() => this.actions$.pipe(
    ofType(FilesActions.UploadTripFile),
    mergeMap(({ options, file }) => this.filesService.uploadFile(options, file)
      .pipe(
        map((newFile: FileMetadataOutput) =>
          FilesActions.UploadTripFileSuccess({ newFile, tripId: options.tripId }),
        ),
      ),
    ),
  ));

  UpdateTripFile$ = createEffect(() => this.actions$.pipe(
    ofType(FilesActions.UpdateTripFile),
    mergeMap(({ fileId, metadata }) => this.filesService.updateFile(fileId, metadata)
      .pipe(
        map((updatedFile: FileMetadataOutput) =>
          FilesActions.UpdateTripFileSuccess({ updatedFile }),
        ),
      ),
    ),
  ));

  DeleteTripFile$ = createEffect(() => this.actions$.pipe(
    ofType(FilesActions.DeleteTripFile),
    mergeMap(({ tripId, fileId }) => this.filesService.deleteFile(tripId, fileId)
      .pipe(
        map(() =>
          FilesActions.DeleteTripFileSuccess({ tripId, fileId }),
        ),
      ),
    ),
  ));

  constructor(
    private actions$: Actions,
    private filesService: FilesService,
  ) {}

}
