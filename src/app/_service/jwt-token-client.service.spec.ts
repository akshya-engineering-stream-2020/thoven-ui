import { TestBed } from '@angular/core/testing';

import { JwtTokenClientService } from './jwt-token-client.service';

describe('JwtTokenClientService', () => {
  let service: JwtTokenClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JwtTokenClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
