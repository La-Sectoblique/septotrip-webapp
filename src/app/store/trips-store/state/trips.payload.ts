import { StepAttributes, StepOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Step';

export type EditedStep = Omit<StepOutput, 'tripId' | 'order' | 'localisation' | 'id'>;

export interface UpdateTripStepPayload {
  tripId: number; stepId: number; editedStep: EditedStep ;
}
