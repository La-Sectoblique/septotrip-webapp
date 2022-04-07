import { FlattenedTrip } from 'src/app/modules/features/trip/models/flattened-trip';

export interface TripState {
  trips: { [tripId: number]: FlattenedTrip };
}

export const initialTripState: TripState = {
  trips: {},
};
