import { TestBed } from '@angular/core/testing';

import { RotacionPagarService } from './rotacion-pagar.service';

describe('RotacionPagarService', () => {
  let service: RotacionPagarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RotacionPagarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
