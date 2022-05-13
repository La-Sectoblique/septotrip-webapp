import { Pipe, PipeTransform } from '@angular/core';
import { PointOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Point';
import { TripPoint } from '../../features/points/models/points-interfaces';

@Pipe({ name: 'filterPointsByStepId' })
export class FilterPointsByStepIdPipe implements PipeTransform {

  transform(points: TripPoint[], stepId: number): TripPoint[] {
    // @TODO Wait for Tanguy to update automatically the point stepId. for now, return everything haha
    return points;
    // return points.filter((point) => point.stepId === stepId);
  }

}
