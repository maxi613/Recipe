import { TestBed } from '@angular/core/testing';

import { TauriceServicesService } from './taurice-services.service';

describe('TauriceServicesService', () => {
  let service: TauriceServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TauriceServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
