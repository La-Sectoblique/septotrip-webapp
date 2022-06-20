import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Visibility } from '@la-sectoblique/septoblique-service/dist/types/utils/Visibility';
import { TranslateService } from '@ngx-translate/core';
import { TripsService } from '../../services/trips.service';

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.scss'],
})
export class CreateTripComponent {

  @Input() isEditMode = false;

  tripForm = this.formBuilder.group({
    name: new FormControl('', [Validators.required, Validators.minLength(1)]),
    visibility: new FormControl('private', [Validators.required]),
  });

  visibilityOptions = [
    { value: 'public', label: this.translateService.instant('Public') },
    { value: 'private', label: this.translateService.instant('Private') },
  ];

  constructor(
    private tripService: TripsService,
    private router: Router,
    private translateService: TranslateService,
    private formBuilder: FormBuilder,
  ) {}


  create(): void {
    if (!this.isValid) {
      return;
    }

    this.tripService.createUserTrips(
      this.tripForm.value.name,
      this.tripForm.value.visibility,
    ).subscribe((trip) => {
      this.router.navigate(['/trips', trip.id]);
    });
  }

  isValid(): boolean {
    return this.tripForm.valid;
  }

}
