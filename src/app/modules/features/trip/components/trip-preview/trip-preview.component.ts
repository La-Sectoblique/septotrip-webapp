import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TripOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Trip';
import { Store } from '@ngrx/store';
import { DeleteTrip } from 'src/app/store/trips-store/state/trips.actions';

@Component({
  selector: 'spt-trip-preview',
  templateUrl: './trip-preview.component.html',
  styleUrls: ['./trip-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TripPreviewComponent {

  @Input() trip: TripOutput;
  @Input() optionsEnabled = false;

  constructor(
    private store: Store,
    private router: Router,
  ) {}

  deleteTrip(): void {
    this.store.dispatch(DeleteTrip({ tripId: this.trip.id }));
    this.router.navigate(['/trips']);
  }

}
