import { Component, Input } from '@angular/core';
import { MapEditMode } from 'src/app/modules/shared/models/map-edit-mode.enum';

@Component({
  selector: 'spt-map-edit-mode-preview',
  templateUrl: './map-edit-mode-preview.component.html',
  styleUrls: ['./map-edit-mode-preview.component.scss'],
})
export class MapEditModePreviewComponent  {

  @Input() mapMode: MapEditMode;

  MapEditMode = MapEditMode;

}
