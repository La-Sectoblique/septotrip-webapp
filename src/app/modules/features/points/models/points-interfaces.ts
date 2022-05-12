import { PointOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Point';

export type EditedPoint = Partial<PointOutput>;

export interface TripPoint extends PointOutput {
  daysIds?: number[];
}
