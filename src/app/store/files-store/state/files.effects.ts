import { Injectable } from '@angular/core';
import { FileMetadataOutput } from '@la-sectoblique/septoblique-service/dist/types/models/File';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, switchMap } from 'rxjs';
import { FilesService } from 'src/app/modules/features/files/services/files.service';
import * as FilesActions from './files.actions';
import * as UtilsActions from '../../utils-store/state/utils.actions';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class FilesEffects {

  GetTripFiles$ = createEffect(() => this.actions$.pipe(
    ofType(FilesActions.GetTripFiles),
    mergeMap(({ tripId }) => this.filesService.getTripFiles(tripId)
      .pipe(
        map((files: FileMetadataOutput[]) =>
          FilesActions.GetTripFilesSuccess({ tripId, files }),
        ),
        catchError(() => [UtilsActions.ErrorHappenedNotify()]),
      ),
    ),
  ));

  UploadTripFile$ = createEffect(() => this.actions$.pipe(
    ofType(FilesActions.UploadTripFile),
    mergeMap(({ options, file }) => this.filesService.uploadFile(options, file)
      .pipe(
        switchMap((newFile: FileMetadataOutput) => [
          FilesActions.UploadTripFileSuccess({ newFile, tripId: options.tripId }),
          UtilsActions.NotifySuccess({
            title: this.translate.instant('CreationDone'),
            message: this.translate.instant('FileCreated'),
          }),
        ]),
        catchError(() => [UtilsActions.ErrorHappenedNotify()]),
      ),
    ),
  ));

  UpdateTripFile$ = createEffect(() => this.actions$.pipe(
    ofType(FilesActions.UpdateTripFile),
    mergeMap(({ fileId, metadata }) => this.filesService.updateFile(fileId, metadata)
      .pipe(
        switchMap((updatedFile: FileMetadataOutput) => [
          FilesActions.UpdateTripFileSuccess({ updatedFile }),
          UtilsActions.NotifySuccess({
            title:  this.translate.instant('UpdateDone'),
            message: this.translate.instant('FileUpdated'),
          }),
        ]),
        catchError(() => [UtilsActions.ErrorHappenedNotify()]),
      ),
    ),
  ));

  DeleteTripFile$ = createEffect(() => this.actions$.pipe(
    ofType(FilesActions.DeleteTripFile),
    mergeMap(({ tripId, fileId }) => this.filesService.deleteFile(tripId, fileId)
      .pipe(
        switchMap(() => [
          FilesActions.DeleteTripFileSuccess({ tripId, fileId }),
          UtilsActions.NotifySuccess({
            title:  this.translate.instant('DeletionDone'),
            message: this.translate.instant('FileDeleted'),
          }),
        ]),
        catchError(() => [UtilsActions.ErrorHappenedNotify()]),
      ),
    ),
  ));

  constructor(
    private actions$: Actions,
    private filesService: FilesService,
    private translate: TranslateService,
  ) {}

}
