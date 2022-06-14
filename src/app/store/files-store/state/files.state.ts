import { FileMetadataOutput } from '@la-sectoblique/septoblique-service/dist/types/models/File';

export interface FilesState {
  tripFiles: { [tripId: number]: FileMetadataOutput[] };
}

export const initialFilesState: FilesState = {
  tripFiles: {},
};
