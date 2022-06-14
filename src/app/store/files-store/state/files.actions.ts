import { FileMetadataOutput } from '@la-sectoblique/septoblique-service/dist/types/models/File';
import { createAction, props } from '@ngrx/store';

export const GetTripFiles = createAction(
  '[Files] Get Trip Files',
  props<{ tripId: number }>(),
);

export const GetTripFilesSuccess = createAction(
  '[Files] Get Trip Files Success',
  props<{ tripId: number; files: FileMetadataOutput[] }>(),
);
