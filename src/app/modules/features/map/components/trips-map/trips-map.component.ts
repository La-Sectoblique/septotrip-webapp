import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { PointOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Point';
import { NbDialogService } from '@nebular/theme';
import { Store } from '@ngrx/store';
import * as mapboxgl from 'mapbox-gl';
import { LngLatLike, Map, MapMouseEvent } from 'mapbox-gl';
import { first, Observable } from 'rxjs';
import { MapEditMode } from 'src/app/modules/shared/models/map-edit-mode.enum';
import { SetDisplayedMapPointIds } from 'src/app/store/map-edit-store/state/map-edit.actions';
import { selectMapEditMode } from 'src/app/store/map-edit-store/state/map-edit.selectors';
import { UpdateTripPoint, UpdateTripStep } from 'src/app/store/trips-store/state/trips.actions';
import { CreatePointComponent } from '../../../points/components/create-point/create-point.component';
import { CreateStepComponent } from '../../../step/components/create-step/create-step.component';
import { FlattenedStep } from '../../../step/models/flattened-step';

@Component({
  selector: 'spt-trips-map',
  templateUrl: './trips-map.component.html',
  styleUrls: ['./trips-map.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TripsMapComponent implements OnChanges, OnInit {

  @Input() steps: FlattenedStep[] = [];
  @Input() points: PointOutput[] = [];
  @Input() tripId: number;

  mapEditMode$: Observable<MapEditMode>;
  MapEditMode = MapEditMode;

  mapCenter: LngLatLike = [7.750149, 48.581551];
  mapZoom: [number] = [7];

  line: any = {
    type: 'Feature',
    properties: {},
    geometry: {
      type: 'LineString',
      coordinates:  [],
    },
  };

  mapMarkersBounds = new mapboxgl.LngLatBounds();

  constructor(
    private nbDialogService: NbDialogService,
    private store: Store,
  ) {}

  ngOnInit(): void {
    this.mapEditMode$ = this.store.select(selectMapEditMode());
    this.mapCenter = [
      this.steps[0].stepInstance.localisation.coordinates[0],
      this.steps[0].stepInstance.localisation.coordinates[1],
    ];


    // Create bounding box for the map
    [
      ...this.steps.map((step) => step.stepInstance.localisation.coordinates),
      ... this.points.map((point) => point.localisation.coordinates),
    ].forEach((coordinates) => {
      this.mapMarkersBounds.extend([coordinates[0], coordinates[1]]);
    });
  }

  ngOnChanges(/*{ steps }: SimpleChanges*/): void {
    this.updateLineDrawing();
  }

  onMapLoaded(map: Map): void {
    map.resize();

    this.updateDisplayedPoints(map);
    map
      .on('moveend', () => {this.updateDisplayedPoints(map);})
      .on('zoomend', () => {this.updateDisplayedPoints(map);});

    // Apply the bouding box
    if (this.steps.length + this.points.length > 1) {map.fitBounds(this.mapMarkersBounds, { padding: 75 });}
  }

  updateDisplayedPoints(map: Map): void {
    const pointIds = this.points?.filter((point) =>
      map.getBounds().contains({ lng: point.localisation.coordinates[0], lat: point.localisation.coordinates[1] }),
    ).map((point) => point.id);

    this.store.dispatch(SetDisplayedMapPointIds({ pointIds }));
  }

  updateLineDrawing(): void {
    this.line = {
      ...this.line,
      geometry: {
        ...this.line.geometry,
        coordinates: this.steps.map((step: FlattenedStep) => step.stepInstance.localisation.coordinates),
      },
    };
  }


  onMapClick(evt: MapMouseEvent): void {
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

  centerMapTo(coordinates: number[]): void {
    this.mapCenter = [coordinates[0], coordinates[1]];
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  updateStepAfterDrag(evt: any, updatedStep: FlattenedStep): void {
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

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
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

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  updateLineLive(evt: any, updatedStepIdx: number): void {
    this.line = {
      ...this.line,
      geometry: {
        ...this.line.geometry,
        coordinates: this.line.geometry.coordinates.map((coordinates: number[], idx: number) => {
          if (updatedStepIdx === idx) {
            // eslint-disable-next-line no-underscore-dangle
            return [evt._lngLat.lng, evt._lngLat.lat];
          }
          return coordinates;
        }),
      },
    };
  }

}
