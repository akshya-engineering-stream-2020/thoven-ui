import { TestBed } from '@angular/core/testing';

import { JwtTokenClientService } from './jwt-token-client.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('JwtTokenClientService', () => {
  let service: JwtTokenClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(JwtTokenClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
