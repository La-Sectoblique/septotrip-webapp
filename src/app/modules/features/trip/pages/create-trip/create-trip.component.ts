import { Component } from '@angular/core';
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

  tripName = '';
  visibility: Visibility = 'private';
  visibilityOptions = [
    { value: 'public', label: this.translateService.instant('Public') },
    { value: 'private', label: this.translateService.instant('Private') },
  ];

  constructor(
    private tripService: TripsService,
    private router: Router,
    private translateService: TranslateService,
  ) {}


  create(): void {
    this.tripService.createUserTrips( this.tripName, this.visibility).subscribe((trip) => {
      this.router.navigate(['/trips', trip.id]);
    });
  }

  isCreationValid(): boolean {
    return this.tripName.length > 3 && this.visibility !== undefined;
  }

}
