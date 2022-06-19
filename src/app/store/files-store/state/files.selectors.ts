import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FilesState } from './files.state';

export const FILES_FEATURE_KEY = 'files';

const selectFeature = createFeatureSelector<FilesState>(
  FILES_FEATURE_KEY,
);

export const selectTripFiles = (tripId: number): any => createSelector(
  selectFeature,
  (state: FilesState) => state.tripFiles[tripId],
);
