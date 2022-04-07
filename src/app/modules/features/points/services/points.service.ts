import { Injectable } from '@angular/core';
import { addPoint, deletePoint, getTripPoints } from '@la-sectoblique/septoblique-service';
import { LocalisationPoint, PointOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Point';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PointsService {

  getTripPoints(tripId: number): Observable<PointOutput[]> {
    return from(getTripPoints(tripId));
  }

  createTripPoint(
    tripId: number,
    title: string,
    localisation: LocalisationPoint,
    description?: string,
  ): Observable<PointOutput> {
    return from(addPoint(tripId, {
      title,
      localisation,
      description,
    }));
  }

  deletePoint(pointId: number): Observable<any> {
    return from(deletePoint(pointId));
  }


}
