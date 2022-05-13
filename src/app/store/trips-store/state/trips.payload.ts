import { LocalisationPoint } from '@la-sectoblique/septoblique-service/dist/types/models/Point';
import { EditedPoint } from 'src/app/modules/features/points/models/points-interfaces';

export interface EditedStep {
  name?: string;
  order?: number;
  duration?: number;
  tripId?: number;
  pathId?: number;
  localisation?: LocalisationPoint;
}


export interface UpdateTripPointPayload {
  tripId: number;
  pointId: number;
  editedPoint: EditedPoint;
}

export interface UpdateTripStepPayload {
  tripId: number; stepId: number; editedStep: EditedStep ;
}
