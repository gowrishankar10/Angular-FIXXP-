import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyHelpersKycComponent } from './daily-helpers-kyc.component';

describe('DailyHelpersKycComponent', () => {
  let component: DailyHelpersKycComponent;
  let fixture: ComponentFixture<DailyHelpersKycComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyHelpersKycComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyHelpersKycComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
