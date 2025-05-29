import { TestBed } from '@angular/core/testing';

import { CapacidadEndeudamientoService } from './capacidad-endeundamiento.service';

describe('CapacidadEndeudamientoService', () => {
  let service: CapacidadEndeudamientoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CapacidadEndeudamientoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
