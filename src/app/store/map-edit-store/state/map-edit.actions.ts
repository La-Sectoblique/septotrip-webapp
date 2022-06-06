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

export const AddDisplayedMapPointIds = createAction(
  '[map-edit]: Add Displayed Map PointIds',
  props<{ pointIds: number[] }>(),
);

export const SetHighlightedStep = createAction(
  '[map-edit]: Set Highlighted Step',
  props<{ stepId: number }>(),
);
export const SetHighlightedPoint = createAction(
  '[map-edit]: Set Highlighted Point',
  props<{ pointId: number }>(),
);
