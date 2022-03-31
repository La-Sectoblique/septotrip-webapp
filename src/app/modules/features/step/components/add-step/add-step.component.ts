import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { LngLat } from 'mapbox-gl';
import { StepsService } from '../../services/steps.service';

@Component({
  selector: 'app-add-step',
  templateUrl: './add-step.component.html',
  styleUrls: ['./add-step.component.scss'],
})
export class AddStepComponent {

  @Input() clickedCoordinates: LngLat;
  @Input() tripId: number;
  stepName = '';


  constructor(
    private stepsService: StepsService,
    private dialogRef: NbDialogRef<AddStepComponent>,
  ) {}

  create(): void {
    console.log('clickedCoordinates', this.clickedCoordinates);
    this.stepsService.createTripSteps(
      this.tripId,
      this.stepName,
      { coordinates: [this.clickedCoordinates.lng, this.clickedCoordinates.lat], type: 'Point' },
    ).finally(() => {
      this.dialogRef.close();
    });
  }

  isCreationValid(): boolean {
    return this.stepName.length > 0;
  }

}
