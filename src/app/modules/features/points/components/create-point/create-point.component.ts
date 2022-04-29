import { Component, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { Store } from '@ngrx/store';
import { LngLat } from 'mapbox-gl';
import { CreateTripPoint } from 'src/app/store/trips-store/state/trips.actions';

@Component({
  selector: 'app-create-point',
  templateUrl: './create-point.component.html',
  styleUrls: ['./create-point.component.scss'],
})
export class CreatePointComponent {

  @Input() tripId: number;
  @Input() clickedCoordinates: LngLat;

  pointTitle = '';
  pointDescription = '';

  constructor(
    private dialogRef: NbDialogRef<CreatePointComponent>,
    private store: Store,
  ) {}

  createPoint(): void {
    this.store.dispatch(CreateTripPoint({ tripId: this.tripId, point: {
      title: this.pointTitle,
      description: this.pointDescription,
      localisation: {
        coordinates: [this.clickedCoordinates.lng, this.clickedCoordinates.lat],
        type: 'Point',
      },
    } }));
    this.dialogRef.close();
  }

  isCreationValid(): boolean {
    return this.pointTitle.length > 0;
  }

}
