import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { PointOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Point';
import { NbDialogRef } from '@nebular/theme';
import { Store } from '@ngrx/store';
import { LngLat } from 'mapbox-gl';
import { CreateTripPoint, UpdateTripPoint } from 'src/app/store/trips-store/state/trips.actions';

@Component({
  selector: 'spt-create-point',
  templateUrl: './create-point.component.html',
  styleUrls: ['./create-point.component.scss'],
})
export class CreatePointComponent  implements OnInit {

  @Input() tripId: number;
  @Input() clickedCoordinates: LngLat;

  @Input() isEditMode = false;
  @Input() editedPoint: PointOutput;

  pointForm = this.formBuilder.group({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
    ]),
    description: '',
  });

  constructor(
    private dialogRef: NbDialogRef<CreatePointComponent>,
    private store: Store,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    if (this.isEditMode) {
      this.pointForm.patchValue({
        title: this.editedPoint.title,
        description: this.editedPoint.description,
      });
    }
  }

  create(): void {
    if (!this.isFormValid()) {
      return;
    }

    if (!this.isEditMode) {
      this.store.dispatch(CreateTripPoint({ tripId: this.tripId, point: {
        title: this.pointForm.value.title,
        description: this.pointForm.value.description,
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
          title: this.pointForm.value.title,
          description: this.pointForm.value.description,
        },
      }));
    }
    this.dialogRef.close();
  }

  isFormValid(): boolean {
    return this.pointForm.valid;
  }

}
