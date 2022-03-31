import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Visibility } from '@la-sectoblique/septoblique-service/dist/types/utils/Visibility';
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
    { value: 'public', label: 'Publique' },
    { value: 'private', label: 'Privée' },
  ];

  constructor(
    private tripService: TripsService,
    private router: Router,
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
