import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { SetHighlightedPoint, SetHighlightedStep } from 'src/app/store/map-edit-store/state/map-edit.actions';

@Injectable({
  providedIn: 'root',
})
export class HighlightMapMarkersService {

  constructor(
    private store: Store,
  ) { }

  highlightStep(stepId: number): void {
    this.store.dispatch(SetHighlightedStep({ stepId }));
    this.store.dispatch(SetHighlightedPoint({ pointId: null }));
  }

  highlightPoint(pointId: number): void {
    this.store.dispatch(SetHighlightedStep({ stepId: null }));
    this.store.dispatch(SetHighlightedPoint({ pointId }));
  }

  unHighlight(): void {
    this.store.dispatch(SetHighlightedStep({ stepId: null }));
    this.store.dispatch(SetHighlightedPoint({ pointId: null }));
  }

}
