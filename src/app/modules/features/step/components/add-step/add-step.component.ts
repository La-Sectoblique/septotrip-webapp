import { Component, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { Store } from '@ngrx/store';
import { LngLat } from 'mapbox-gl';
import { CreateTripStep } from 'src/app/store/trips-store/state/trips.actions';

@Component({
  selector: 'app-add-step',
  templateUrl: './add-step.component.html',
  styleUrls: ['./add-step.component.scss'],
})
export class AddStepComponent {

  @Input() clickedCoordinates: LngLat;
  @Input() tripId: number;
  stepName = '';
  stepDuration = 1;

  constructor(
    private dialogRef: NbDialogRef<AddStepComponent>,
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
