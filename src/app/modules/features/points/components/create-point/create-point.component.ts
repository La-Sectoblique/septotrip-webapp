import { Component, Input } from '@angular/core';
import { LngLat } from 'mapbox-gl';
import { PointsService } from '../../services/points.service';

@Component({
  selector: 'app-create-point',
  templateUrl: './create-point.component.html',
  styleUrls: ['./create-point.component.scss'],
})
export class CreatePointComponent {

  @Input() tripId: number;
  @Input() clickedCoordinates: LngLat;

  pointTitle = '';
  pointDescription = '';

  constructor(
    private pointService: PointsService,
  ) {}

  createPoint(): void {
    this.pointService.createTripPoint(
      this.tripId,
      this.pointTitle,
      { coordinates: [this.clickedCoordinates.lng, this.clickedCoordinates.lat], type: 'Point' },
      this.pointDescription,
    );
  }

  isCreationValid(): boolean {
    return this.pointTitle.length > 0;
  }

}
