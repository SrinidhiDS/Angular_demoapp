import { TestBed } from '@angular/core/testing';

import { ParticularsearchService } from './particularsearch.service';

describe('ParticularsearchService', () => {
  let service: ParticularsearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParticularsearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
