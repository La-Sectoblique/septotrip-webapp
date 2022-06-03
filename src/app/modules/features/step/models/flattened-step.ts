import { DayOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Day';
import { PathOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Path';
import { StepOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Step';

export interface FlattenedStep {
  stepInstance: StepOutput;
  daysInstance?: DayOutput[];
  pathToStep?: PathOutput;
}
