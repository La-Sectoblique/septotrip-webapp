import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { PointOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Point';
import { StepOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Step';
import { NbDialogService } from '@nebular/theme';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MapEditMode } from 'src/app/modules/shared/models/map-edit-mode.enum';
import { UpdateMapEditMode } from 'src/app/store/map-edit-store/state/map-edit.actions';
import { selectMapEditMode } from 'src/app/store/map-edit-store/state/map-edit.selectors';
import { DeleteTripStep, UpdateTripStepOrder } from 'src/app/store/trips-store/state/trips.actions';
import { FlattenedStep } from '../../models/flattened-step';
import { CreateStepComponent } from '../create-step/create-step.component';

@Component({
  selector: 'spt-steps-list',
  templateUrl: './steps-list.component.html',
  styleUrls: ['./steps-list.component.scss'],
})
export class StepsListComponent implements OnInit {

  @Input() tripId: number;
  @Input() steps: FlattenedStep[];
  @Input() points: PointOutput[];

  mapEditMode$: Observable<MapEditMode>;
  mapEditMode = MapEditMode;


  constructor(
    private store: Store,
    private nbDialogService: NbDialogService,
  ) {}

  ngOnInit(): void {
    this.mapEditMode$ = this.store.select(selectMapEditMode());
  }

  switchStepEditMode(editMode: MapEditMode): void {
    if (editMode !== MapEditMode.EDIT_STEPS) {
      this.store.dispatch(UpdateMapEditMode({ mapMode: MapEditMode.EDIT_STEPS }));
    } else {
      this.store.dispatch(UpdateMapEditMode({ mapMode: MapEditMode.DEFAULT }));
    }
  }


  deleteStep(stepId: number): void {
    this.store.dispatch(DeleteTripStep({ tripId: this.tripId, stepId }));
  }

  editStep(step: StepOutput): void {
    this.nbDialogService.open(CreateStepComponent, {
      context: {
        tripId: this.tripId,
        isEditMode: true,
        editedStep: step,
      },
    });
  }

  drop(event: CdkDragDrop<FlattenedStep[]>): void {
    // console.log('event', event);
    // const testArray = [
    //   ...this.steps,
    // ];
    // console.log('test Array before', testArray);
    // moveItemInArray(testArray, 1, 0);
    // console.log('test Array after', testArray);
    console.log('event', event);
    this.store.dispatch(UpdateTripStepOrder({
      fromIdx: event.container.data.indexOf(event.item.data),
      toIdx: event.currentIndex,
      // fromIdx: event.previousIndex,
      // toIdx: event.currentIndex,
      tripId: this.tripId,
    }));
  }

}
