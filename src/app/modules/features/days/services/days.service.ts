import { Injectable } from '@angular/core';
import { getStepDays } from '@la-sectoblique/septoblique-service';
import { DayOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Day';
import { from, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DaysService {

  getStepDays(stepId: number): Observable<DayOutput[]> {
    return from(getStepDays(stepId));
  }

}
