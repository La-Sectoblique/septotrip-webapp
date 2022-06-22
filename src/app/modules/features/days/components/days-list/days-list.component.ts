import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { DayOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Day';
import { PointOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Point';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectHighlightedPointId } from 'src/app/store/map-edit-store/state/map-edit.selectors';
import { RefreshPointsDayIds, UpdatePointDays } from 'src/app/store/trips-store/state/trips.actions';
import { HighlightMapMarkersService } from '../../../map/services/highlight-map-markers.service';
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

  highlightedPointId$: Observable<number | null>;


  constructor(
    private store: Store,
    private highlightMapMarkersService: HighlightMapMarkersService,
  ) {}

  ngOnInit(): void {
    // @HERE call points getStepPoints in store to update points stepsId and then the filter can work
    this.days.forEach((day) => {
      this.store.dispatch(RefreshPointsDayIds({ tripId: this.tripId, dayId: day.id }));
    });

    this.highlightedPointId$ = this.store.select(selectHighlightedPointId());
  }

  itemDropped(event: CdkDragDrop<TripPoint>, dayId: number): void {
    const eventData: TripPoint = event.item.data;

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

  unlinkPoint(point: TripPoint, dayIdToRemove: number): void {
    this.store.dispatch(UpdatePointDays({
      tripId: this.tripId,
      pointId: point.id,
      daysIds: point.daysIds
        ? point.daysIds.filter((dayId) => dayId !== dayIdToRemove)
        : [],
    }));
  }

  highlightPoint(pointId: number): void {
    this.highlightMapMarkersService.highlightPoint(pointId);
  }

  unHighlight(): void {
    this.highlightMapMarkersService.unHighlight();
  }

}
