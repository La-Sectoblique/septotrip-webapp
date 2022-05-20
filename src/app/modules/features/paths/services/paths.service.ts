import { Injectable } from '@angular/core';
import { getPathToStep, updatePath } from '@la-sectoblique/septoblique-service';
import { PathAttributes, PathOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Path';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PathsService {

  getPathToStep(stepId: number): Observable<PathOutput> {
    return from(getPathToStep(stepId));
  }

  updatePath(pathId: number, newPath: Partial<PathAttributes>): Observable<PathOutput> {
    return from(updatePath(pathId, newPath));
  }

}
