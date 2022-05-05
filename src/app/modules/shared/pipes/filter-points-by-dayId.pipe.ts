import { Pipe, PipeTransform } from '@angular/core';
import { PointOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Point';

@Pipe({ name: 'filterPointsByDayId' })
export class FilterPointsByDayIdPipe implements PipeTransform {

  transform(points: PointOutput[], dayId: number): PointOutput[] {
    return points.filter((point) => point.dayId === dayId);
  }

}
