import { FileMetadataAttributes, FileMetadataOutput } from '@la-sectoblique/septoblique-service/dist/types/models/File';
import { FileFormat } from '@la-sectoblique/septoblique-service/dist/utils/FormData';
import { createAction, props } from '@ngrx/store';

export const ResetFileStore = createAction(
  '[Files]: reset',
);

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

export const UpdateTripFile = createAction(
  '[Files] Updte Trip File',
  props<{ fileId: number; metadata: FileMetadataAttributes }>(),
);
export const UpdateTripFileSuccess = createAction(
  '[Files] Updte Trip File Success',
  props<{ updatedFile: FileMetadataOutput }>(),
);

export const DeleteTripFile = createAction(
  '[Files] Delete Trip File',
  props<{ tripId: number; fileId: number }>(),
);
export const DeleteTripFileSuccess = createAction(
  '[Files] Delete Trip File Success',
  props<{ tripId: number; fileId: number }>(),
);
