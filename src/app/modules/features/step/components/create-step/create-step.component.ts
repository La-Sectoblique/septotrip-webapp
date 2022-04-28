import { Component, HostListener, Input, OnInit } from '@angular/core';
import { updateStep } from '@la-sectoblique/septoblique-service';
import { StepOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Step';
import { NbDialogRef } from '@nebular/theme';
import { Store } from '@ngrx/store';
import { LngLat } from 'mapbox-gl';
import { CreateTripStep, UpdateTripStep } from 'src/app/store/trips-store/state/trips.actions';

@Component({
  selector: 'spt-create-step',
  templateUrl: './create-step.component.html',
  styleUrls: ['./create-step.component.scss'],
})
export class CreateStepComponent implements OnInit {

  @Input() clickedCoordinates: LngLat;
  @Input() tripId: number;

  @Input() isEditMode = false;
  @Input() editedStep: StepOutput;

  stepName = '';
  stepDuration = 1;

  constructor(
    private dialogRef: NbDialogRef<CreateStepComponent>,
    private store: Store,
  ) {}

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.create();
    }
  }

  ngOnInit(): void {
    if (this.isEditMode) {
      this.stepName = this.editedStep.name;
      this.stepDuration = this.editedStep.duration;
    }
  }



  create(): void {
    if (!this.isCreationValid()) {
      return;
    }

    if (!this.isEditMode) {
      this.store.dispatch(CreateTripStep({ tripId: this.tripId,
        step: {
          name: this.stepName,
          localisation: {
            coordinates: [this.clickedCoordinates.lng, this.clickedCoordinates.lat], type: 'Point',
          },
          duration: this.stepDuration,
        },
      }));
    } else {
      this.store.dispatch(UpdateTripStep({
        tripId: this.tripId,
        stepId: this.editedStep.id,
        editedStep: {
          name: this.stepName,
          duration: this.stepDuration,
        },
      }));
    }
    this.dialogRef.close();
  }

  isCreationValid(): boolean {
    return this.stepName.length > 0;
  }

}
