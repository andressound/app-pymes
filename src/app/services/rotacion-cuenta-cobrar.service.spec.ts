import { TestBed } from '@angular/core/testing';

import { RotacionCuentaCobrarService } from './rotacion-cuenta-cobrar.service';

describe('RotacionCuentaCobrarService', () => {
  let service: RotacionCuentaCobrarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RotacionCuentaCobrarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
