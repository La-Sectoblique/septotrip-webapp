import { DayOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Day';
import { PointOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Point';
import { StepOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Step';
import { TripOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Trip';
import { FlattenedStep } from '../../step/models/flattened-step';

export interface FlattenedTrip {
  tripInstance: TripOutput;
  steps: { [stepId: number]: FlattenedStep };
}
