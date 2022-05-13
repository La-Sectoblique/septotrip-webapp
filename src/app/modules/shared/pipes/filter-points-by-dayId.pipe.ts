import { Pipe, PipeTransform } from '@angular/core';
import { TripPoint } from '../../features/points/models/points-interfaces';

@Pipe({ name: 'filterPointsByDayId' })
export class FilterPointsByDayIdPipe implements PipeTransform {

  transform(points: TripPoint[], dayId: number): TripPoint[] {
    console.log('points to filter', points);
    console.log('dayId filtered', dayId);
    return points.filter((point) => point.daysIds?.includes(dayId));
  }

}
