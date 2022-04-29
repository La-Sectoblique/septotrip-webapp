import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PointOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Point';
import { StepOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Step';
import { NbDialogService } from '@nebular/theme';
import { Store } from '@ngrx/store';
import { LngLatLike, MapMouseEvent } from 'mapbox-gl';
import { first, Observable } from 'rxjs';
import { MapEditMode } from 'src/app/modules/shared/models/map-edit-mode.enum';
import { selectMapEditMode } from 'src/app/store/map-edit-store/state/map-edit.selectors';
import { UpdateTripPoint, UpdateTripStep } from 'src/app/store/trips-store/state/trips.actions';
import { CreatePointComponent } from '../../../points/components/create-point/create-point.component';
import { CreateStepComponent } from '../../../step/components/create-step/create-step.component';
import { FlattenedStep } from '../../../step/models/flattened-step';

@Component({
  selector: 'spt-trips-map',
  templateUrl: './trips-map.component.html',
  styleUrls: ['./trips-map.component.scss'],
})
export class TripsMapComponent implements OnChanges, OnInit {

  @Input() steps: FlattenedStep[] = [];
  @Input() points: PointOutput[] = [];
  @Input() tripId: number;

  mapEditMode$: Observable<MapEditMode>;
  MapEditMode = MapEditMode;

  mapCenter: LngLatLike = [7.750149, 48.581551];
  mapZoom: [number] = [7];

  selectedPoint: GeoJSON.Feature<GeoJSON.Point> | null = null;
  cursorStyle = '';

  stepMarkerImageLoaded = false;
  pointMarkerImageLoaded = false;

  stepsMapPoints: GeoJSON.FeatureCollection<GeoJSON.Point> = {
    type: 'FeatureCollection',
    features: [],
  };

  pointsMapPoints: GeoJSON.FeatureCollection<GeoJSON.Point> = {
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
    private store: Store,
  ) {}

  ngOnInit(): void {
    this.mapEditMode$ = this.store.select(selectMapEditMode());
  }

  ngOnChanges({ steps, points }: SimpleChanges): void {
    if (steps) {
      this.stepsMapPoints = {
        ...this.stepsMapPoints,
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

    if (points) {
      this.pointsMapPoints = {
        ...this.pointsMapPoints,
        features: points.currentValue.map((point: PointOutput) => ({
          type: 'Feature',
          geometry: {
            type: point.localisation.type,
            coordinates: point.localisation.coordinates,
          },
          properties: {
            title: point.title,
          },
        })),
      };
    }
  }


  onMapClick(evt: MapMouseEvent): void {
    if (this.cursorStyle !== 'pointer') {
      this.mapEditMode$.pipe(first()).subscribe((mapMode) => {
        if (mapMode === MapEditMode.EDIT_STEPS) {
          this.nbDialogService.open(CreateStepComponent, {
            context: {
              clickedCoordinates: evt.lngLat,
              tripId: this.tripId,
            },
          });
        }

        if (mapMode === MapEditMode.EDIT_POINTS) {
          this.nbDialogService.open(CreatePointComponent, {
            context: {
              clickedCoordinates:  evt.lngLat,
              tripId: this.tripId,
            },
          });
        }
      });
    }
  }

  centerMapTo(evt: MapMouseEvent): void {
    this.mapCenter = (evt as any).features[0].geometry.coordinates;
  }

  updateStepAfterDrag(evt: any, updatedStep: FlattenedStep): void {
    console.log('evt', evt);
    this.store.dispatch(UpdateTripStep({
      stepId: updatedStep.stepInstance.id,
      tripId: this.tripId,
      editedStep: {
        ...updatedStep.stepInstance,
        localisation: {
          ...updatedStep.stepInstance.localisation,
          // eslint-disable-next-line no-underscore-dangle
          coordinates: [evt._lngLat.lng, evt._lngLat.lat],
        },
      },
    }));
  }

  updatePointAfterDrag(evt: any, updatePoint: PointOutput): void {
    this.store.dispatch(UpdateTripPoint({
      pointId: updatePoint.id,
      tripId: this.tripId,
      editedPoint: {
        ...updatePoint,
        localisation: {
          ...updatePoint.localisation,
          // eslint-disable-next-line no-underscore-dangle
          coordinates: [evt._lngLat.lng, evt._lngLat.lat],
        },
      },
    }));
  }

}
