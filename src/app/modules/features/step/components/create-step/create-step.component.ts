import { Component, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { Store } from '@ngrx/store';
import { LngLat } from 'mapbox-gl';
import { CreateTripStep } from 'src/app/store/trips-store/state/trips.actions';

@Component({
  selector: 'spt-create-step',
  templateUrl: './create-step.component.html',
  styleUrls: ['./create-step.component.scss'],
})
export class CreateStepComponent {

  @Input() clickedCoordinates: LngLat;
  @Input() tripId: number;
  stepName = '';
  stepDuration = 1;

  constructor(
    private dialogRef: NbDialogRef<CreateStepComponent>,
    private store: Store,
  ) {}

  create(): void {
    this.store.dispatch(CreateTripStep({ tripId: this.tripId,
      step: {
        name: this.stepName,
        localisation: {
          coordinates: [this.clickedCoordinates.lng, this.clickedCoordinates.lat], type: 'Point',
        },
        duration: this.stepDuration,
      },
    }));
    this.dialogRef.close();
  }

  isCreationValid(): boolean {
    return this.stepName.length > 0;
  }

}
