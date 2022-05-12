import { LocalisationPoint, PointOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Point';

export interface EditedStep {
  name?: string;
  order?: number;
  duration?: number;
  tripId?: number;
  pathId?: number;
  localisation?: LocalisationPoint;
}

export type EditedPoint = Partial<PointOutput>;

export interface UpdateTripStepPayload {
  tripId: number; stepId: number; editedStep: EditedStep ;
}

export interface UpdateTripPointPayload {
  tripId: number;
  pointId: number;
  editedPoint: EditedPoint;
}
