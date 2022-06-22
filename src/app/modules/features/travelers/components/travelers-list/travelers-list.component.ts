import { HttpStatusCode } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserOutput } from '@la-sectoblique/septoblique-service/dist/types/models/User';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { GetTripTravelers, RemoveTripTraveler } from 'src/app/store/trips-store/state/trips.actions';
import { ErrorHappenedNotify, NotifyError } from 'src/app/store/utils-store/state/utils.actions';
import { TravelersService } from '../../services/travelers.service';

@Component({
  selector: 'spt-travelers-list',
  templateUrl: './travelers-list.component.html',
  styleUrls: ['./travelers-list.component.scss'],
})
export class TravelersListComponent  {

  @Input() tripId: number;
  @Input() tripAuthorId: number;
  @Input() travelers: UserOutput[];

  addTravelerForm = this.formBuilder.group({
    mailAddress: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(
    private travelerService: TravelersService,
    private store: Store,
    private formBuilder: FormBuilder,
    private translate: TranslateService,
  ) {}

  addTraveler(): void {

    if (!this.isFormValid()) {
      return;
    }

    this.travelerService.addTraveler(this.tripId, this.addTravelerForm.value.mailAddress)
      .subscribe({
        next: () => {
          this.store.dispatch(GetTripTravelers({ tripId: this.tripId }));
          this.addTravelerForm.reset();
        },
        error: (error) => {
          this.addTravelerForm.reset();
          if (error.code === HttpStatusCode.NotFound) {
            this.store.dispatch(NotifyError({
              title: this.translate.instant('AddTravelersNotFoundErrorTitle'),
              message: this.translate.instant('AddTravelersNotFoundErrorMessage'),
            }));
            return;
          }
          this.store.dispatch(ErrorHappenedNotify());
        },
      });
  }

  removeTraveler(userId: number): void {
    this.store.dispatch(RemoveTripTraveler({ tripId: this.tripId, userId }));
  }

  isFormValid(): boolean {
    return this.addTravelerForm.valid;
  }



}
