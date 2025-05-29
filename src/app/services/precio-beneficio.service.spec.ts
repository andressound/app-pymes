import { TestBed } from '@angular/core/testing';

import { PrecioBeneficioService } from './precio-beneficio.service';

describe('PrecioBeneficioService', () => {
  let service: PrecioBeneficioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrecioBeneficioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
