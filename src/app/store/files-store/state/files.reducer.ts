import { createReducer } from '@ngrx/store';
import { initialFilesState } from './files.state';

export const filesReducer = createReducer(
  initialFilesState,
);
