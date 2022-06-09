/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { UserLanguageService } from './user-language.service';

describe('Service: UserLanguage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserLanguageService],
    });
  });

  it('should ...', inject([UserLanguageService], (service: UserLanguageService) => {
    expect(service).toBeTruthy();
  }));
});
