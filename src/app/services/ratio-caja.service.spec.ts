import { TestBed } from '@angular/core/testing';

import { RatioCajaService } from './ratio-caja.service';

describe('RatioCajaService', () => {
  let service: RatioCajaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RatioCajaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
