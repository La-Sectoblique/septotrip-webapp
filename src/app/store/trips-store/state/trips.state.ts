import { TripOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Trip';

export interface TripState {
  trips: TripOutput[] | null;
}

export const initialTripState: TripState = {
  trips: null,
};
