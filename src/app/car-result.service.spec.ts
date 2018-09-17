import { TestBed, inject } from '@angular/core/testing';

import { CarResultService } from './car-result.service';

describe('CarResultService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarResultService]
    });
  });

  it('should be created', inject([CarResultService], (service: CarResultService) => {
    expect(service).toBeTruthy();
  }));
});
