import { Pipe, PipeTransform } from '@angular/core';
import { TripPoint } from '../../features/points/models/points-interfaces';

@Pipe({ name: 'filterPointsByPointIds' })
export class FilterPointsByPointIdsPipe implements PipeTransform {

  transform(points: TripPoint[], pointIds: number[] | null): TripPoint[] {
    if (pointIds) {
      return points.filter((point) => pointIds.includes(point.id));
    } else {
      return points;
    }
  }

}
