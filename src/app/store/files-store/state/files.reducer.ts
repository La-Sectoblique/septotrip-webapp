import { createReducer, on } from '@ngrx/store';
import { initialFilesState } from './files.state';
import * as FilesActions from './files.actions';

export const filesReducer = createReducer(
  initialFilesState,

  on(FilesActions.GetTripFilesSuccess, (state, { tripId, files }) => ({
    ...state,
    tripFiles: {
      ...state.tripFiles,
      [tripId]: files,
    },
  })),

  on(FilesActions.UploadTripFileSuccess, (state, { newFile, tripId }) => ({
    ...state,
    tripFiles: {
      ...state.tripFiles,
      [tripId]: [
        ...state.tripFiles[tripId],
        newFile,
      ],
    },
  })),

  on(FilesActions.UpdateTripFileSuccess, (state, { updatedFile }) => {
    const updatedFiles = state.tripFiles[updatedFile.tripId].map((file) => {
      if (file.id === updatedFile.id) {return updatedFile;}
      return file;
    });
    return {
      ...state,
      tripFiles: {
        ...state.tripFiles,
        [updatedFile.tripId]: updatedFiles,
      },
    };
  }),

  on(FilesActions.DeleteTripFileSuccess, (state, { fileId, tripId }) => ({
    ...state,
    tripFiles: {
      ...state.tripFiles,
      [tripId]: state.tripFiles[tripId].filter((file) => file.id !== fileId),
    },
  })),

);
