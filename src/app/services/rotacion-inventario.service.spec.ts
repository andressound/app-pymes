import { TestBed } from '@angular/core/testing';

import { RotacionInventarioService } from './rotacion-inventario.service';

describe('RotacionInventarioService', () => {
  let service: RotacionInventarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RotacionInventarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
