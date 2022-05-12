import { Pipe, PipeTransform } from '@angular/core';
import { PointOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Point';
import { TripPoint } from '../../features/points/models/points-interfaces';

@Pipe({ name: 'filterPointsByStepId' })
export class FilterPointsByStepIdPipe implements PipeTransform {

  transform(points: TripPoint[], stepId: number): TripPoint[] {
    return points.filter((point) => point.stepId === stepId);
  }

}
