import { TripOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Trip';
import { UserOutput } from '@la-sectoblique/septoblique-service/dist/types/models/User';
import { TripPoint } from '../../points/models/points-interfaces';
import { FlattenedStep } from '../../step/models/flattened-step';

export interface FlattenedTrip {
  tripInstance: TripOutput;
  steps: FlattenedStep[];
  points: TripPoint[];
  travelers: UserOutput[];
}
