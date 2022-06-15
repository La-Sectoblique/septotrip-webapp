import { FileMetadataAttributes, FileMetadataOutput } from '@la-sectoblique/septoblique-service/dist/types/models/File';
import { FileFormat } from '@la-sectoblique/septoblique-service/dist/utils/FormData';
import { createAction, props } from '@ngrx/store';

export const GetTripFiles = createAction(
  '[Files] Get Trip Files',
  props<{ tripId: number }>(),
);

export const GetTripFilesSuccess = createAction(
  '[Files] Get Trip Files Success',
  props<{ tripId: number; files: FileMetadataOutput[] }>(),
);

export const UploadTripFile = createAction(
  '[Files] Upload Trip File',
  props<{ options: FileMetadataAttributes; file: FileFormat }>(),
);
export const UploadTripFileSuccess = createAction(
  '[Files] Upload Trip File Success',
  props<{ newFile: FileMetadataOutput; tripId: number }>(),
);
