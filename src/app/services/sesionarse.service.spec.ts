import { TestBed } from '@angular/core/testing';

import { SesionarseService } from './sesionarse.service';

describe('SesionarseService', () => {
  let service: SesionarseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SesionarseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
