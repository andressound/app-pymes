import { TestBed } from '@angular/core/testing';

import { MargenOperativoService } from './margen-operativo.service';

describe('MargenOperativoService', () => {
  let service: MargenOperativoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MargenOperativoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
