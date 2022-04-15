import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { LngLatLike, MapMouseEvent } from 'mapbox-gl';
import { AddStepComponent } from '../../../step/components/add-step/add-step.component';
import { FlattenedStep } from '../../../step/models/flattened-step';

@Component({
  selector: 'spt-trips-map',
  templateUrl: './trips-map.component.html',
  styleUrls: ['./trips-map.component.scss'],
})
export class TripsMapComponent implements OnChanges {

  @Input() steps: FlattenedStep[];
  @Input() tripId: number;

  mapCenter: LngLatLike = [7.750149, 48.581551];
  mapZoom: [number] = [7];

  selectedPoint: GeoJSON.Feature<GeoJSON.Point> | null = null;
  cursorStyle = '';

  markerImageLoaded = false;

  points: GeoJSON.FeatureCollection<GeoJSON.Point> = {
    type: 'FeatureCollection',
    features: [],
  };

  line: any = {
    type: 'Feature',
    properties: {},
    geometry: {
      type: 'LineString',
      coordinates:  [],
    },
  };

  constructor(
    private nbDialogService: NbDialogService,
  ) {}


  ngOnChanges({ steps }: SimpleChanges): void {
    console.log('steps changes', steps);
    this.points = {
      ...this.points,
      features: steps.currentValue.map((step: FlattenedStep) => ({
        type: 'Feature',
        geometry: {
          type: step.stepInstance.localisation.type,
          coordinates: step.stepInstance.localisation.coordinates,
        },
        properties: {
          title: step.stepInstance.name,
        },
      })),
    };
    this.line = {
      ...this.line,
      geometry: {
        ...this.line.geometry,
        coordinates: steps.currentValue.map((step: FlattenedStep) => step.stepInstance.localisation.coordinates),
      },
    };
  }


  onMapClick(evt: MapMouseEvent): void {
    if (this.cursorStyle !== 'pointer') {
      this.nbDialogService.open(AddStepComponent, {
        context: {
          clickedCoordinates: evt.lngLat,
          tripId: this.tripId,
        },
      });
    }
  }

  centerMapTo(evt: MapMouseEvent): void {
    this.mapCenter = (evt as any).features[0].geometry.coordinates;
  }

}
