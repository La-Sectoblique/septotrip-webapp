import { Component, Input, OnInit } from '@angular/core';
import { PointOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Point';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MapEditMode } from 'src/app/modules/shared/models/map-edit-mode.enum';
import { UpdateMapEditMode } from 'src/app/store/map-edit-store/state/map-edit.actions';
import { selectDisplayedMapPointIds, selectMapEditMode } from 'src/app/store/map-edit-store/state/map-edit.selectors';
import { DeleteTripPoint } from 'src/app/store/trips-store/state/trips.actions';
import { HighlightMapMarkersService } from '../../../map/services/highlight-map-markers.service';
import { CreatePointComponent } from '../create-point/create-point.component';

@Component({
  selector: 'spt-points-list',
  templateUrl: './points-list.component.html',
  styleUrls: ['./points-list.component.scss'],
})
export class PointsListComponent implements OnInit {

  @Input() tripId: number;
  @Input() points: PointOutput[] | null;
  @Input() daysId: number[];

  mapDisplayedPointIds$: Observable<number[]>;
  isMapFilteringEnabled = true;

  mapEditMode$: Observable<MapEditMode>;
  mapEditMode = MapEditMode;


  constructor(
    private store: Store,
    private nbDialogService: NbDialogService,
    private toastrService: NbToastrService,
    private highlightMapMarkersService: HighlightMapMarkersService,
  ) {}

  ngOnInit(): void {
    this.mapEditMode$ = this.store.select(selectMapEditMode());
    this.mapDisplayedPointIds$ = this.store.select(selectDisplayedMapPointIds());
  }

  switchPointEditMode(editMode: MapEditMode): void {
    if (editMode !== MapEditMode.EDIT_POINTS) {
      this.store.dispatch(UpdateMapEditMode({ mapMode: MapEditMode.EDIT_POINTS }));
    } else {
      this.store.dispatch(UpdateMapEditMode({ mapMode: MapEditMode.DEFAULT }));
    }
  }

  deletePoint(pointId: number): void {
    this.store.dispatch(DeleteTripPoint({ tripId: this.tripId, pointId }));
  }

  editPoint(editedPoint: PointOutput): void {
    this.nbDialogService.open(CreatePointComponent, {
      context: {
        tripId: this.tripId,
        isEditMode: true,
        editedPoint,
      },
    });
  }

  getLinkedDropListId(): string[] {
    return this.daysId.map((dayId) => `${dayId}-day-dropzone`);
  }

  toggleMapFiltering(): void {
    this.isMapFilteringEnabled = !this.isMapFilteringEnabled;
  }

  highlightPoint(pointId: number): void {
    this.highlightMapMarkersService.highlightPoint(pointId);
  }

  unHighlight(): void {
    this.highlightMapMarkersService.unHighlight();
  }

}
