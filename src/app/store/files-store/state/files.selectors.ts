import { createFeatureSelector } from '@ngrx/store';
import { FilesState } from './files.state';

export const FILES_FEATURE_KEY = 'map-edit';

const selectFeature = createFeatureSelector<FilesState>(
  FILES_FEATURE_KEY,
);
