import { TestBed } from '@angular/core/testing';

import { RoeService } from './roe.service';

describe('RoeService', () => {
  let service: RoeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
