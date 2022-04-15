import { Component, Input } from '@angular/core';
import { PointOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Point';
import { Store } from '@ngrx/store';
import { DeleteTripPoint } from 'src/app/store/trips-store/state/trips.actions';

@Component({
  selector: 'spt-points-list',
  templateUrl: './points-list.component.html',
  styleUrls: ['./points-list.component.scss'],
})
export class PointsListComponent {

  @Input() tripId: number;

  @Input() points: PointOutput[] | null;

  constructor(
    private store: Store,
  ) {}


  deletePoint(pointId: number): void {
    this.store.dispatch(DeleteTripPoint({ tripId: this.tripId, pointId }));
  }


}
