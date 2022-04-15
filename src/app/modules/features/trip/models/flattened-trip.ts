import { TripOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Trip';
import { FlattenedStep } from '../../step/models/flattened-step';

export interface FlattenedTrip {
  tripInstance: TripOutput;
  steps: FlattenedStep[];
}
