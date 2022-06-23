import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TripOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Trip';
import { Store } from '@ngrx/store';
import { UpdateTrip } from 'src/app/store/trips-store/state/trips.actions';
import { ErrorHappenedNotify } from 'src/app/store/utils-store/state/utils.actions';
import { TripsService } from '../../services/trips.service';

@Component({
  selector: 'spt-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.scss'],
})
export class CreateTripComponent implements OnInit {

  @Input() isEditMode = false;
  @Input() tripToEdit: TripOutput;

  tripForm = this.formBuilder.group({
    name: new FormControl('', [Validators.required, Validators.minLength(1)]),
    visibility: new FormControl('private', [Validators.required]),
  });

  constructor(
    private tripService: TripsService,
    private router: Router,
    private store: Store,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    if (this.isEditMode) {
      this.tripForm.patchValue({
        name: this.tripToEdit.name,
        visibility: this.tripToEdit.visibility,
      });
    }
  }


  create(): void {
    if (!this.isValid) {
      return;
    }

    if (!this.isEditMode) {
      this.tripService.createUserTrips(
        this.tripForm.value.name,
        this.tripForm.value.visibility,
      ).subscribe(({
        next: (trip) => {
          this.router.navigate(['/trips', trip.id]);
        },
        error: () => {
          this.store.dispatch(ErrorHappenedNotify());
        },
      }));
    } else {
      this.store.dispatch(UpdateTrip({
        tripId: this.tripToEdit.id,
        updatedTrip: {
          ...this.tripToEdit,
          name: this.tripForm.value.name,
          visibility: this.tripForm.value.visibility,
        },
      }));
    }
  }

  isValid(): boolean {
    return this.tripForm.valid;
  }

}
