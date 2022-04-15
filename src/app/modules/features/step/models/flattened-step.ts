import { DayOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Day';
import { PointOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Point';
import { StepOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Step';

export interface FlattenedStep {
  stepInstance: StepOutput;
  daysInstance?: DayOutput[];
  pointsInstance?: PointOutput[];
}
