import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { StepOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Step';
import { NbDialogService } from '@nebular/theme';
import { LngLatLike, MapMouseEvent } from 'mapbox-gl';
import { AddStepComponent } from '../../../step/components/add-step/add-step.component';

@Component({
  selector: 'spt-trips-map',
  templateUrl: './trips-map.component.html',
  styleUrls: ['./trips-map.component.scss'],
})
export class TripsMapComponent implements OnChanges {

  @Input() steps: StepOutput[];
  @Input() tripId: number;



  mapCenter: LngLatLike = [7.750149, 48.581551];
  mapZoom: [number] = [13];

  selectedPoint: GeoJSON.Feature<GeoJSON.Point> | null = null;
  cursorStyle = '';

  markerImageLoaded = false;

  points: GeoJSON.FeatureCollection<GeoJSON.Point> = {
    type: 'FeatureCollection',
    features: [],
  };


  constructor(
    private nbDialogService: NbDialogService,
  ) {}


  ngOnChanges({ steps }: SimpleChanges): void {
    console.log('steps changes', steps);
    this.points = {
      ...this.points,
      features: steps.currentValue.map((step: StepOutput) => ({
        type: 'Feature',
        geometry: {
          type: step.localisation.type,
          coordinates: step.localisation.coordinates,
        },
        properties: {
          title: step.name,
        },
      })),
    };
  }


  onMapClick(evt: MapMouseEvent): void {
    console.log('click evt', evt);
    this.nbDialogService.open(AddStepComponent, {
      context: {
        clickedCoordinates: evt.lngLat,
        tripId: this.tripId,
      },
    });
  }

}
