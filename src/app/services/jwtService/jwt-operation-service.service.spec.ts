import { TestBed } from '@angular/core/testing';

import { JwtOperationService } from './jwt-operation-service.service';

describe('JwtOperationServiceService', () => {
  let service: JwtOperationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JwtOperationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
