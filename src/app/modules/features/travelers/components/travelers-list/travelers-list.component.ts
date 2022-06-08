import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserOutput } from '@la-sectoblique/septoblique-service/dist/types/models/User';
import { Store } from '@ngrx/store';
import { GetTripTravelers, RemoveTripTraveler } from 'src/app/store/trips-store/state/trips.actions';
import { TravelersService } from '../../services/travelers.service';

@Component({
  selector: 'spt-travelers-list',
  templateUrl: './travelers-list.component.html',
  styleUrls: ['./travelers-list.component.scss'],
})
export class TravelersListComponent  {

  @Input() tripId: number;
  @Input() travelers: UserOutput[];

  addTravelerForm = this.formBuilder.group({
    mailAddress: '',
  });

  constructor(
    private travelerService: TravelersService,
    private store: Store,
    private formBuilder: FormBuilder,
  ) {}

  addTraveler(): void {
    this.travelerService.addTraveler(this.tripId, this.addTravelerForm.value.mailAddress)
      .subscribe(() => {
        this.store.dispatch(GetTripTravelers({ tripId: this.tripId }));
        this.addTravelerForm.reset();
      });
  }

  removeTraveler(userId: number): void {
    this.store.dispatch(RemoveTripTraveler({ tripId: this.tripId, userId }));
  }



}
