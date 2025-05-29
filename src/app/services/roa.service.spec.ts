import { TestBed } from '@angular/core/testing';

import { RoaService } from './roa.service';

describe('RoaService', () => {
  let service: RoaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
