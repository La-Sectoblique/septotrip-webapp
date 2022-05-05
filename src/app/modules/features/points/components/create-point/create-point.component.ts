import { Component, HostListener, Input, OnInit } from '@angular/core';
import { PointOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Point';
import { NbDialogRef } from '@nebular/theme';
import { Store } from '@ngrx/store';
import { LngLat } from 'mapbox-gl';
import { CreateTripPoint, UpdateTripPoint } from 'src/app/store/trips-store/state/trips.actions';

@Component({
  selector: 'app-create-point',
  templateUrl: './create-point.component.html',
  styleUrls: ['./create-point.component.scss'],
})
export class CreatePointComponent  implements OnInit {

  @Input() tripId: number;
  @Input() clickedCoordinates: LngLat;

  @Input() isEditMode = false;
  @Input() editedPoint: PointOutput;

  pointTitle = '';
  pointDescription = '';

  constructor(
    private dialogRef: NbDialogRef<CreatePointComponent>,
    private store: Store,
  ) {}

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.createPoint();
    }
  }

  ngOnInit(): void {
    if (this.isEditMode) {
      this.pointTitle = this.editedPoint.title;
      this.pointDescription = this.editedPoint.description || '';
    }
  }

  createPoint(): void {
    if (!this.isCreationValid()) {
      return;
    }

    if (!this.isEditMode) {
      this.store.dispatch(CreateTripPoint({ tripId: this.tripId, point: {
        title: this.pointTitle,
        description: this.pointDescription,
        localisation: {
          coordinates: [this.clickedCoordinates.lng, this.clickedCoordinates.lat],
          type: 'Point',
        },
      } }));
    } else {
      this.store.dispatch(UpdateTripPoint({
        tripId: this.tripId,
        pointId: this.editedPoint.id,
        editedPoint: {
          title: this.pointTitle,
          description: this.pointDescription,
        },
      }));
    }
    this.dialogRef.close();
  }

  isCreationValid(): boolean {
    return this.pointTitle.length > 0;
  }

}
