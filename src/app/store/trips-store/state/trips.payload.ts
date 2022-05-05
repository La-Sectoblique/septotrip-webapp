import { LocalisationPoint } from '@la-sectoblique/septoblique-service/dist/types/models/Point';

export interface EditedStep {
  name?: string;
  order?: number;
  duration?: number;
  tripId?: number;
  pathId?: number;
  localisation?: LocalisationPoint;
}

export interface EditedPoint {
  title?: string;
  description?: string;
  localisation?: LocalisationPoint;
  authorId?: number;
  tripId?: number;
  stepId?: number;
  dayId?: number;
}
export interface UpdateTripStepPayload {
  tripId: number; stepId: number; editedStep: EditedStep ;
}

export interface UpdateTripPointPayload {
  tripId: number;
  pointId: number;
  editedPoint: EditedPoint;
}
