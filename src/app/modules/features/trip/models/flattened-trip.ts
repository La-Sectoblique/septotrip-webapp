import { PointOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Point';
import { TripOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Trip';
import { UserOutput } from '@la-sectoblique/septoblique-service/dist/types/models/User';
import { FlattenedStep } from '../../step/models/flattened-step';

export interface FlattenedTrip {
  tripInstance: TripOutput;
  steps: FlattenedStep[];
  points: PointOutput[];
  travelers: UserOutput[];
}
