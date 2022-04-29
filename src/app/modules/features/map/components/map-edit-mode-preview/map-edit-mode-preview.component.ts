import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { MapEditMode } from 'src/app/modules/shared/models/map-edit-mode.enum';
import { UpdateMapEditMode } from 'src/app/store/map-edit-store/state/map-edit.actions';

@Component({
  selector: 'spt-map-edit-mode-preview',
  templateUrl: './map-edit-mode-preview.component.html',
  styleUrls: ['./map-edit-mode-preview.component.scss'],
})
export class MapEditModePreviewComponent  {

  @Input() mapMode: MapEditMode;

  MapEditMode = MapEditMode;

  constructor(
    private store: Store,
  ) {}

  abortEditing(): void {
    this.store.dispatch(UpdateMapEditMode({ mapMode: MapEditMode.DEFAULT }));
  }

}
