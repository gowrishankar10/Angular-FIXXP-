import { TestBed } from '@angular/core/testing';

import { FlatUserKycService } from './flat-user-kyc.service';

describe('FlatUserKycService', () => {
  let service: FlatUserKycService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlatUserKycService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
