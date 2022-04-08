import { MapEditMode } from 'src/app/modules/shared/models/map-edit-mode.enum';

export interface MapEditState {
  mode: MapEditMode;
}

export const initialMapEditState: MapEditState = {
  mode: MapEditMode.DEFAULT,
};

