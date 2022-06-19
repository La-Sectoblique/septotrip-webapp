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

export const selectTripStepFiles = (tripId: number, stepId: number): any => createSelector(
  selectFeature,
  (state: FilesState) => state.tripFiles[tripId].filter((file) => file.stepId === stepId),
);

export const selectTripPointFiles = (tripId: number, pointId: number): any => createSelector(
  selectFeature,
  (state: FilesState) => state.tripFiles[tripId].filter((file) => file.pointId === pointId),
);

export const selectTripPathFiles = (tripId: number, pathId: number): any => createSelector(
  selectFeature,
  (state: FilesState) => state.tripFiles[tripId].filter((file) => file.pathId === pathId),
);
