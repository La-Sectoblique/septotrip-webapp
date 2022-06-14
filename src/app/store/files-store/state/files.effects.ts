import { Injectable } from '@angular/core';
import { getTripFiles } from '@la-sectoblique/septoblique-service';
import { FileMetadataOutput } from '@la-sectoblique/septoblique-service/dist/types/models/File';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from, map, mergeMap } from 'rxjs';
import * as FilesActions from './files.actions';

@Injectable()
export class FilesEffects {

  GetTripFiles$ = createEffect(() => this.actions$.pipe(
    ofType(FilesActions.GetTripFiles),
    mergeMap(({ tripId }) => from(getTripFiles(tripId))
      .pipe(
        map((files: FileMetadataOutput[]) =>
          FilesActions.GetTripFilesSuccess({ tripId, files }),
        ),
        // @TODO: catchError(()) => CALL ERROR ACTION),
      ),
    ),
  ));

  constructor(
    private actions$: Actions,
  ) {}

}
