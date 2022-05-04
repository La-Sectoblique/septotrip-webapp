import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
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

  constructor(
    private store: Store,
  ) {}

  itemDropped(event: CdkDragDrop<PointOutput>, dayId: number): void {
    console.log('getted someting', event);

    // @TODO: do something to put this fucking point in this fucking day haha
    const eventData: PointOutput = event.item.data;
    this.store.dispatch(UpdateTripPoint({
      pointId: eventData.id,
      tripId: this.tripId,
      editedPoint: {
        ...eventData,
        stepId: this.stepId,
        dayId,
      },
    }));
  }

}
