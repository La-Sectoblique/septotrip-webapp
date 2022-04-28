import { Injectable } from '@angular/core';
import { DayOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Day';
import { from, Observable } from 'rxjs';

@Injectable()
export class DaysService {

  getStepDays(stepId: number): Observable<DayOutput[]> {
    return from(this.getStepDays(stepId));
  }

}
