import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, Input } from '@angular/core';
import { DayOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Day';
import { PointOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Point';
import { Store } from '@ngrx/store';
import { UpdateTripPoint } from 'src/app/store/trips-store/state/trips.actions';

@Component({
  selector: 'spt-days-list',
  templateUrl: './days-list.component.html',
  styleUrls: ['./days-list.component.scss'],
})
export class DaysListComponent  {

  @Input() days: DayOutput[];
  @Input() stepId: number;
  @Input() tripId: number;
  @Input() points: PointOutput[];

  constructor(
    private store: Store,
  ) {}

  itemDropped(event: CdkDragDrop<PointOutput>, dayId: number): void {
    // @TODO: do something to put this fucking point in this fucking day haha
    const eventData: PointOutput = event.item.data;
    this.store.dispatch(UpdateTripPoint({
      tripId: this.tripId,
      pointId: eventData.id,
      editedPoint: {
        ...eventData,
        stepId: this.stepId,
        dayId,
      },
    }));
  }

  unlinkPoint(point: PointOutput): void {
    this.store.dispatch(UpdateTripPoint({
      tripId: this.tripId,
      pointId: point.id,
      editedPoint: {
        ...point,
        // @TODO: pass null here, but can't because type is only number | undefined
        // dayId: null,
        // stepId: null,
      },
    }));
  }

}
