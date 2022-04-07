import { DayOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Day';
import { StepOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Step';

export interface FlattenedStep {
  stepInstance?: StepOutput;
  daysInstance?: DayOutput[];
}
