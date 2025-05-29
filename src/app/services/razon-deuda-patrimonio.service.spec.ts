import { TestBed } from '@angular/core/testing';

import { RazonDeudaPatrimonioService } from './razon-deuda-patrimonio.service';

describe('RazonDeudaPatrimonioService', () => {
  let service: RazonDeudaPatrimonioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RazonDeudaPatrimonioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
