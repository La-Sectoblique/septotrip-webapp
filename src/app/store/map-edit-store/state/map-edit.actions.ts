import { createAction, props } from '@ngrx/store';
import { MapEditMode } from 'src/app/modules/shared/models/map-edit-mode.enum';

export const UpdateMapEditMode = createAction(
  '[map-edit]: update map edit mode',
  props<{ mapMode: MapEditMode }>(),
);

export const SetDisplayedMapPointIds = createAction(
  '[map-edit]: Set Displayed Map PointIds',
  props<{ pointIds: number[] }>(),
);
