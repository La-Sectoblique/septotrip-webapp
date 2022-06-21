import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { FileMetadataOutput } from '@la-sectoblique/septoblique-service/dist/types/models/File';
import { PointOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Point';
import { TripOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Trip';
import { UserOutput } from '@la-sectoblique/septoblique-service/dist/types/models/User';
import { NbDialogService } from '@nebular/theme';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ConfirmComponent } from 'src/app/modules/shared/components/confirm/confirm.component';
import { GetTripFiles } from 'src/app/store/files-store/state/files.actions';
import { selectTripFiles } from 'src/app/store/files-store/state/files.selectors';
import { DeleteTrip,
  GetTrip,
  GetTripPoints,
  GetTripSteps,
  GetTripTravelers,
} from 'src/app/store/trips-store/state/trips.actions';
import { selectTripPoints,
  selectTripSteps,
  selectTripTravelers,
  selectUserTrip,
} from 'src/app/store/trips-store/state/trips.selectors';
import { FlattenedStep } from '../../../step/models/flattened-step';
import { FlattenedTrip } from '../../models/flattened-trip';

@UntilDestroy()
@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss'],
})
export class TripComponent implements OnInit, OnDestroy {

  trip$: Observable<FlattenedTrip>;
  steps$: Observable<FlattenedStep[]>;
  points$: Observable<PointOutput[]>;
  travelers$: Observable<UserOutput[]>;
  tripFiles$: Observable<FileMetadataOutput[]>;

  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private router: Router,
    private titleService: Title,
    private nbDialogService: NbDialogService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const { tripId } = params;

      this.store.dispatch(GetTrip({ tripId }));
      this.trip$ = this.store.select(selectUserTrip(tripId));

      this.store.dispatch(GetTripSteps({ tripId }));
      this.steps$ = this.store.select(selectTripSteps(tripId));

      this.store.dispatch(GetTripPoints({ tripId }));
      this.points$ = this.store.select(selectTripPoints(tripId));

      this.store.dispatch(GetTripTravelers({ tripId }));
      this.travelers$ = this.store.select(selectTripTravelers(tripId));

      this.store.dispatch(GetTripFiles({ tripId }));
      this.tripFiles$ = this.store.select(selectTripFiles(tripId));

      this.trip$.pipe(untilDestroyed(this)).subscribe((trip) => {
        this.titleService.setTitle(trip?.tripInstance.name);
      });
    });
  }

  getDaysIds(steps: FlattenedStep[]): number[] {
    const daysIds: number[] = [];

    steps.forEach((step) => {
      step.daysInstance?.forEach((day) => {
        daysIds.push(day.id);
      });
    });

    return daysIds;
  }

  deleteTrip(trip: TripOutput): void {
    this.nbDialogService.open(ConfirmComponent, {
      context: {
        confirmLabel: `Etes vous sur de vouloir supprimer le voyage "${trip.name}" ?`,
        confirmAction: () => {
          this.store.dispatch(DeleteTrip({ tripId: trip.id }));
          this.router.navigate(['/trips']);
        },
      },
    });
  }

  ngOnDestroy(): void {
    this.titleService.setTitle('SeptoTrip');
  }

}
