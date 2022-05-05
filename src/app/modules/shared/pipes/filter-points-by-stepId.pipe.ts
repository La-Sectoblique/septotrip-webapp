import { Pipe, PipeTransform } from '@angular/core';
import { PointOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Point';

@Pipe({ name: 'filterPointsByStepId' })
export class FilterPointsByStepIdPipe implements PipeTransform {

  transform(points: PointOutput[], stepId: number): PointOutput[] {
    return points.filter((point) => point.stepId === stepId);
  }

}
