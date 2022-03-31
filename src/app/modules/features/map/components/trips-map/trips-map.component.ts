import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { StepOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Step';
import { LngLatLike, MapMouseEvent } from 'mapbox-gl';

@Component({
  selector: 'spt-trips-map',
  templateUrl: './trips-map.component.html',
  styleUrls: ['./trips-map.component.scss'],
})
export class TripsMapComponent implements OnChanges {

  @Input() steps: StepOutput[];


  mapCenter: LngLatLike = [7.750149, 48.581551];
  mapZoom: [number] = [13];

  selectedPoint: GeoJSON.Feature<GeoJSON.Point> | null = null;
  cursorStyle = '';

  markerImageLoaded = false;

  points: GeoJSON.FeatureCollection<GeoJSON.Point> = {
    type: 'FeatureCollection',
    features: [
      // {
      //   type: 'Feature',
      //   geometry: {
      //     type: 'Point',
      //     coordinates: [7.750149, 48.585551],
      //   },
      //   properties: {
      //     icon: 'border-dot-13',
      //     title: 'Départ',
      //     description: 'Point de départ de notre expédition !',
      //   },
      // },
    ],
  };


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


  onClick(evt: MapMouseEvent): void {
    // this.selectedPoint = (evt as any).features[0];
    console.log('click evt', evt);
  }

}
