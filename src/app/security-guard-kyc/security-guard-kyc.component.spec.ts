import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityGuardKycComponent } from './security-guard-kyc.component';

describe('SecurityGuardKycComponent', () => {
  let component: SecurityGuardKycComponent;
  let fixture: ComponentFixture<SecurityGuardKycComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityGuardKycComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityGuardKycComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
