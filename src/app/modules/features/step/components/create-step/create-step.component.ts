import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
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

  stepForm = this.formBuilder.group({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
    ]),
    duration: new FormControl(1, [
      Validators.required,
      Validators.min(1),
      Validators.max(100),
    ]),
  });

  constructor(
    private dialogRef: NbDialogRef<CreateStepComponent>,
    private store: Store,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    if (this.isEditMode) {
      this.stepForm.patchValue({
        name: this.editedStep.name,
        duration: this.editedStep.duration,
      });
    }
  }



  create(): void {
    if (!this.isFormValid()) {
      return;
    }

    if (!this.isEditMode) {
      this.store.dispatch(CreateTripStep({ tripId: this.tripId,
        step: {
          name: this.stepForm.value.name,
          localisation: {
            coordinates: [this.clickedCoordinates.lng, this.clickedCoordinates.lat], type: 'Point',
          },
          duration: this.stepForm.value.duration,
        },
      }));
    } else {
      this.store.dispatch(UpdateTripStep({
        tripId: this.tripId,
        stepId: this.editedStep.id,
        editedStep: {
          name: this.stepForm.value.name,
          duration: this.stepForm.value.duration,
        },
      }));
    }
    this.dialogRef.close();
  }

  isFormValid(): boolean {
    return this.stepForm.valid;
  }

}
