import { Component, Input, OnInit } from '@angular/core';
import { PointOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Point';
import { NbDialogService } from '@nebular/theme';
import { Store } from '@ngrx/store';
import { first, Observable } from 'rxjs';
import { MapEditMode } from 'src/app/modules/shared/models/map-edit-mode.enum';
import { UpdateMapEditMode } from 'src/app/store/map-edit-store/state/map-edit.actions';
import { selectMapEditMode } from 'src/app/store/map-edit-store/state/map-edit.selectors';
import { DeleteTripPoint } from 'src/app/store/trips-store/state/trips.actions';
import { CreatePointComponent } from '../create-point/create-point.component';

@Component({
  selector: 'spt-points-list',
  templateUrl: './points-list.component.html',
  styleUrls: ['./points-list.component.scss'],
})
export class PointsListComponent implements OnInit {

  @Input() tripId: number;

  @Input() points: PointOutput[] | null;

  mapEditMode$: Observable<MapEditMode>;
  mapEditMode = MapEditMode;

  constructor(
    private store: Store,
    private nbDialogService: NbDialogService,
  ) {}

  ngOnInit(): void {
    this.mapEditMode$ = this.store.select(selectMapEditMode());
  }

  switchPointEditMode(): void {
    this.mapEditMode$.pipe(first()).subscribe((editMode) => {
      if (editMode !== MapEditMode.EDIT_POINTS) {
        this.store.dispatch(UpdateMapEditMode({ mapMode: MapEditMode.EDIT_POINTS }));
      } else {
        this.store.dispatch(UpdateMapEditMode({ mapMode: MapEditMode.DEFAULT }));
      }
    });
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


}
