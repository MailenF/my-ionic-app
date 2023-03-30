import { TestBed } from '@angular/core/testing';

import { RutinesService } from './rutines.service';

describe('RutinesService', () => {
  let service: RutinesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RutinesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
