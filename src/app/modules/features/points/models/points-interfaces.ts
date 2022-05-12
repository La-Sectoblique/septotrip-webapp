import { PointOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Point';

export type EditedPoint = Partial<PointOutput>;

export interface TripPoint extends PointOutput {
  stepIds?: number[];
  daysIds?: number[];
}
