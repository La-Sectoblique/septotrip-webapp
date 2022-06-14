import { FileMetadataOutput } from '@la-sectoblique/septoblique-service/dist/types/models/File';

export interface FilesState {
  files: FileMetadataOutput[];
}

export const initialFilesState: FilesState = {
  files: [],
};
