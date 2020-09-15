import { TestBed } from '@angular/core/testing';

import { ThovenApiService } from './thoven-api.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ThovenApiService', () => {
  let service: ThovenApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(ThovenApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
