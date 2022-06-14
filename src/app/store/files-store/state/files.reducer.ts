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

);
