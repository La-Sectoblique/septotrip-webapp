import { createReducer, on } from '@ngrx/store';
import { initialMapEditState } from './map-edit.state';
import * as MapEditActions from './map-edit.actions';

export const mapEditReducer = createReducer(
  initialMapEditState,

  on(MapEditActions.UpdateMapEditMode, (state, { mapMode }) => ({
    ...state,
    mode: mapMode,
  })),

  on(MapEditActions.SetDisplayedMapPointIds, (state, { pointIds })=> ({
    ...state,
    displayedPointIds: pointIds,
  })),

  on(MapEditActions.AddDisplayedMapPointIds, (state, { pointIds })=> ({
    ...state,
    displayedPointIds: state.displayedPointIds
      ? [
        ...state.displayedPointIds,
        ...pointIds,
      ]
      : state.displayedPointIds,
  })),
);
