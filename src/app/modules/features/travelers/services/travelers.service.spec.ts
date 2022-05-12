/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { TravelersService } from './travelers.service';

describe('Service: Travelers', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TravelersService],
    });
  });

  it('should ...', inject([TravelersService], (service: TravelersService) => {
    expect(service).toBeTruthy();
  }));
});
