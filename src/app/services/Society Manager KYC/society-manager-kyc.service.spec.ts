import { TestBed } from '@angular/core/testing';

import { SocietyManagerKycService } from './society-manager-kyc.service';

describe('SocietyManagerKycService', () => {
  let service: SocietyManagerKycService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocietyManagerKycService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
