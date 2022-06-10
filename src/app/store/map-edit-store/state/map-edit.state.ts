import { MapEditMode } from 'src/app/modules/shared/models/map-edit-mode.enum';

export interface MapEditState {
  mode: MapEditMode;
  displayedPointIds: number[];
  highlightedStepId: number | null;
  highlightedPointId: number | null;
}

export const initialMapEditState: MapEditState = {
  mode: MapEditMode.DEFAULT,
  displayedPointIds: [],
  highlightedStepId: null,
  highlightedPointId: null,
};
