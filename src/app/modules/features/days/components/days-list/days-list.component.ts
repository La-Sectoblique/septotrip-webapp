import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { DayOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Day';
import { PointOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Point';
import { Store } from '@ngrx/store';
import { RefreshPointsDayIds, UpdatePointDays, UpdateTripPoint } from 'src/app/store/trips-store/state/trips.actions';
import { TripPoint } from '../../../points/models/points-interfaces';

@Component({
  selector: 'spt-days-list',
  templateUrl: './days-list.component.html',
  styleUrls: ['./days-list.component.scss'],
})
export class DaysListComponent implements OnInit  {

  @Input() days: DayOutput[];
  @Input() stepId: number;
  @Input() tripId: number;
  @Input() points: PointOutput[];

  constructor(
    private store: Store,
  ) {}

  ngOnInit(): void {
    // @HERE call points getStepPoints in store to update points stepsId and then the filter can work
    this.days.forEach((day) => {
      this.store.dispatch(RefreshPointsDayIds({ tripId: this.tripId, dayId: day.id }));
    });
  }

  itemDropped(event: CdkDragDrop<TripPoint>, dayId: number): void {
    // @TODO: do something to put this fucking point in this fucking day haha
    const eventData: TripPoint = event.item.data;
    // this.store.dispatch(UpdateTripPoint({
    //   tripId: this.tripId,
    //   pointId: eventData.id,
    //   editedPoint: {
    //     ...eventData,
    //     stepId: this.stepId,
    //     // dayId,
    //   },
    // }));
    this.store.dispatch(UpdatePointDays({
      tripId: this.tripId,
      pointId: eventData.id,
      daysIds: eventData.daysIds
        ? [
          ...eventData.daysIds,
          dayId,
        ]
        : [
          dayId,
        ],
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
