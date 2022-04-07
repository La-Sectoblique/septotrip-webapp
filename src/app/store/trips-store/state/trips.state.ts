import { DayOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Day';
import { PointOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Point';
import { StepOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Step';
import { TripOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Trip';

export interface TripState {
  // trips: TripOutput[] | null;
  trips: { [tripId: number]: {
    tripInstance: TripOutput;
    steps: { [stepId: number]: {
      stepInstance: StepOutput;
      daysInstance: DayOutput[];
      pointsInstance: PointOutput[];
    }; };
  }; } | null;
}

export const initialTripState: TripState = {
  trips: null,
};
