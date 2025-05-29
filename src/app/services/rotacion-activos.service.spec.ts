import { TestBed } from '@angular/core/testing';

import { RotacionActivosService } from './rotacion-activos.service';

describe('RotacionActivosService', () => {
  let service: RotacionActivosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RotacionActivosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
