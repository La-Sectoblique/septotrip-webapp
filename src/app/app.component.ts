import { Component, OnInit } from '@angular/core';
import { LngLatLike, MapMouseEvent } from 'mapbox-gl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  newPointName = '';
  newPointDesc = '';
  
  mapCenter: LngLatLike = [7.750149, 48.581551];
  mapZoom: [number] = [14];

  selectedPoint: GeoJSON.Feature<GeoJSON.Point> | null = null;
  cursorStyle: string = "";

  points: GeoJSON.FeatureCollection<GeoJSON.Point> = {
    type: 'FeatureCollection',
    features: [{
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [7.750149, 48.585551]
        },
        'properties': {
          'icon': 'border-dot-13',
          'title': 'Départ',
          'description': 'Point de départ de notre expédition !'
        },
      },]
  };

  ngOnInit(): void {
      
  }

  onClick(evt: MapMouseEvent): void {
    this.selectedPoint = (<any>evt).features[0];
  }

  mapClick(evt: MapMouseEvent): void {
    if(this.newPointName.length <= 0) {
      return;
    }
    this.points = {
      ...this.points,
      features: [
        ...this.points.features,
        {
          'type': 'Feature',
          'geometry': {
            'type': 'Point',
            'coordinates': [evt.lngLat.lng, evt.lngLat.lat]
          },
          'properties': {
            'icon': 'border-dot-13',
            'title': this.newPointName,
            'description': this.newPointDesc || ''
          },
        }
      ]
    }
    this.newPointName = '';
    this.newPointDesc = '';
  }

  delete(idx: number): void {
    this.points = {
      ...this.points,
      features: this.points.features.filter((_, pointIdx) => idx !== pointIdx)
    }
  }

  get getSelectedPointsCoord(): LngLatLike {
    return this.selectedPoint?.geometry.coordinates as LngLatLike
  }
}
