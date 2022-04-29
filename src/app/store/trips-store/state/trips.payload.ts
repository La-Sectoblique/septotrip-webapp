import { LocalisationPoint } from '@la-sectoblique/septoblique-service/dist/types/models/Point';
import { StepAttributes, StepOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Step';
export interface EditedStep {
  name?: string;
  order?: number;
  duration?: number;
  tripId?: number;
  pathId?: number;
  localisation?: LocalisationPoint;
}

export interface UpdateTripStepPayload {
  tripId: number; stepId: number; editedStep: EditedStep ;
}
