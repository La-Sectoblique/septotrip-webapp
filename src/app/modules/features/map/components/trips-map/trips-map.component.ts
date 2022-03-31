import { Component } from '@angular/core';
import { LngLatLike, MapMouseEvent } from 'mapbox-gl';

@Component({
  selector: 'spt-trips-map',
  templateUrl: './trips-map.component.html',
  styleUrls: ['./trips-map.component.scss'],
})
export class TripsMapComponent  {

  mapCenter: LngLatLike = [7.750149, 48.581551];
  mapZoom: [number] = [13];

  selectedPoint: GeoJSON.Feature<GeoJSON.Point> | null = null;
  cursorStyle = '';

  imageLoaded = false;

  points: GeoJSON.FeatureCollection<GeoJSON.Point> = {
    type: 'FeatureCollection',
    features: [{
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [7.750149, 48.585551],
      },
      properties: {
        icon: 'border-dot-13',
        title: 'Départ',
        description: 'Point de départ de notre expédition !',
      },
    }, {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [7.760149, 48.585551],
      },
      properties: {
        icon: 'border-dot-13',
        title: 'second',
        description: 'notre expédition !',
      },
    }],
  };

  onClick(evt: MapMouseEvent): void {
    // this.selectedPoint = (evt as any).features[0];
    console.log('click evt', evt);
  }

}
