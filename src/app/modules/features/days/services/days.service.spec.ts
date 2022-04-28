/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { DaysService } from './days.service';

describe('Service: Days', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaysService],
    });
  });

  it('should ...', inject([DaysService], (service: DaysService) => {
    expect(service).toBeTruthy();
  }));
});
