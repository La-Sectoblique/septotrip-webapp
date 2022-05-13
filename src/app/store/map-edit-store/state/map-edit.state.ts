import { MapEditMode } from 'src/app/modules/shared/models/map-edit-mode.enum';

export interface MapEditState {
  mode: MapEditMode;
  displayedPointIds: number[];
}

export const initialMapEditState: MapEditState = {
  mode: MapEditMode.DEFAULT,
  displayedPointIds: [],
};

