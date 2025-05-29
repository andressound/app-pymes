import { TestBed } from '@angular/core/testing';

import { MargenBrutoService } from './margen-bruto.service';

describe('MargenBrutoService', () => {
  let service: MargenBrutoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MargenBrutoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
