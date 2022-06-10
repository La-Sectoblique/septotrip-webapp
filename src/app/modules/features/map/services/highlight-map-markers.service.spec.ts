/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { HighlightMapMarkersService } from './highlight-map-markers.service';

describe('Service: HighlightMapMarkers', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HighlightMapMarkersService],
    });
  });

  it('should ...', inject([HighlightMapMarkersService], (service: HighlightMapMarkersService) => {
    expect(service).toBeTruthy();
  }));
});
