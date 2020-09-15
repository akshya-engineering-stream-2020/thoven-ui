import { TestBed } from '@angular/core/testing';

import { ThovenApiService } from './thoven-api.service';

describe('ThovenApiService', () => {
  let service: ThovenApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThovenApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
