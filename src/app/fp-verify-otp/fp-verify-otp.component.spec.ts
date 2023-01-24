import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FpVerifyOtpComponent } from './fp-verify-otp.component';

describe('FpVerifyOtpComponent', () => {
  let component: FpVerifyOtpComponent;
  let fixture: ComponentFixture<FpVerifyOtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FpVerifyOtpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FpVerifyOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
