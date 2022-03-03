import { Component, OnInit } from '@angular/core';
import { LngLatLike, MapMouseEvent } from 'mapbox-gl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'septotrip-webapp';
  
  mapCenter: LngLatLike = [7.750290, 60.581571];
  mapZoom: [number] = [17];

  selectedPoint: GeoJSON.Feature<GeoJSON.Point> | null = null;
  cursorStyle: string = "";

  points: GeoJSON.FeatureCollection<GeoJSON.Point> = {
    type: 'FeatureCollection',
    features: [{
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [7.750390, 60.581571]
        },
        'properties': {
          'icon': 'border-dot-13',
          'title': 'Départ'
        },
      },]
  };

  ngOnInit(): void {
      
  }

  onClick(evt: MapMouseEvent): void {
    console.log("mouseClick", evt)
    this.selectedPoint = (<any>evt).features[0];
  }

  mapClick(evt: MapMouseEvent): void {
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
            'title': 'nouveau'
          },
        }
      ]
    }
  }

  delete(idx: number): void {
    this.points = {
      ...this.points,
      features: this.points.features.filter((_, pointIdx) => idx !== pointIdx)
    }
  }

}
