import { TestBed, inject } from '@angular/core/testing';

import { HandyServiceService } from './handy-service.service';

describe('HandyServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HandyServiceService]
    });
  });

  it('should be created', inject([HandyServiceService], (service: HandyServiceService) => {
    expect(service).toBeTruthy();
  }));
});
  