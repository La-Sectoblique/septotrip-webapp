import { Injectable } from '@angular/core';
import { StepOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Step';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import {  map, mergeMap, switchMap } from 'rxjs';
import { StepsService } from 'src/app/modules/features/step/services/steps.service';
import * as TripsActions from '../trips.actions';
import * as UtilsActions from '../../../utils-store/state/utils.actions';
import { selectTripSteps } from '../trips.selectors';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class StepsEffects {

  // === STEPS ===

  GetTripSteps$ = createEffect(() => this.actions$.pipe(
    ofType(TripsActions.GetTripSteps),
    mergeMap(({ tripId }) => this.stepsService.getTripSteps(tripId)
      .pipe(
        switchMap((steps: StepOutput[]) => [
          TripsActions.GetTripStepsSuccess({ steps, tripId }),
        ],
        ),
        // @TODO: catchError(() => CALL ERROR ACTION),
      ),
    ),
  ));

  GetTripStepsSuccess$ = createEffect(() =>  this.actions$.pipe(
    ofType(TripsActions.GetTripStepsSuccess),
    switchMap(({ steps, tripId }) => [
      ...(steps.map((step) =>
        TripsActions.GetStepDays({ stepId: step.id, tripId }),
      )),
      ...(steps.map((step) =>
        TripsActions.GetPathToStep({ tripId, stepId: step.id }),
      )),
    ]),
  ));

  CreateTripStep$ = createEffect(() => this.actions$.pipe(
    ofType(TripsActions.CreateTripStep),
    concatLatestFrom(({ tripId }) => this.store.select(selectTripSteps(tripId))),
    mergeMap(([{ tripId, step }, steps]) => this.stepsService.createTripStep(
      tripId,
      step.name,
      step.duration,
      steps.length,
      step.localisation,
    )
      .pipe(
        switchMap((newStep: StepOutput) => [
          TripsActions.CreateTripStepSuccess({ step: newStep, tripId }),
          TripsActions.GetStepDays({ stepId: newStep.id, tripId }),
          TripsActions.GetPathToStep({ stepId: newStep.id, tripId }),
          UtilsActions.NotifySuccess({
            title: this.translate.instant('CreationDone'),
            message: this.translate.instant('StepCreated'),
          }),
        ]),
        // @TODO: catchError(() => CALL ERROR ACTION),
      ),
    ),
  ));

  UpdateTripStep$ = createEffect(() => this.actions$.pipe(
    ofType(TripsActions.UpdateTripStep),
    mergeMap(({ tripId, stepId, editedStep }) => this.stepsService.updateTripStep(stepId, editedStep)
      .pipe(
        switchMap((newStep) => [
          TripsActions.UpdateTripStepSuccess({ tripId, newStep }),
          TripsActions.GetStepDays({ stepId: newStep.id, tripId }),
          UtilsActions.NotifySuccess({
            title: this.translate.instant('UpdateDone'),
            message: this.translate.instant('StepUpdated'),
          }),
        ]),
        // @TODO: catchError(() => CALL ERROR ACTION),
      )),
  ));

  DeleteTripStep$ = createEffect(() => this.actions$.pipe(
    ofType(TripsActions.DeleteTripStep),
    mergeMap(({ stepId, tripId }) => this.stepsService.deleteStep(stepId)
      .pipe(
        switchMap(() => [
          TripsActions.DeleteTripStepSuccess({ stepId, tripId }),
          UtilsActions.NotifySuccess({
            title: this.translate.instant('DeletionDone'),
            message: this.translate.instant('StepDeleted'),
          }),
        ]),
        // @TODO: catchError(() => CALL ERROR ACTION),
      )),
  ));

  UpdateTripStepOrder$ = createEffect(() => this.actions$.pipe(
    ofType(TripsActions.UpdateTripStepOrder),
    mergeMap(({ toIdx, tripId, step }) => this.stepsService.updateTripStepOrder(step.stepInstance.id, toIdx + 1)
      .pipe(
        map((steps) => TripsActions.GetTripStepsSuccess({ steps, tripId })),
      ),
    ),
  ));



  constructor(
    private actions$: Actions,
    private stepsService: StepsService,
    private store: Store,
    private translate: TranslateService,
  ) {}

}
