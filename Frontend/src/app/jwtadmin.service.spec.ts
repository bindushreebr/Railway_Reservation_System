import { TestBed } from '@angular/core/testing';

import { JwtadminService } from './jwtadmin.service';

describe('JwtadminService', () => {
  let service: JwtadminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JwtadminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
