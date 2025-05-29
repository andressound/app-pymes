import { TestBed } from '@angular/core/testing';

import { MostrarEgresoService } from './mostraregreso.service';

describe('MostraregresoService', () => {
  let service: MostrarEgresoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MostrarEgresoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
