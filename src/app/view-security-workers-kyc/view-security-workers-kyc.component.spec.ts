import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSecurityWorkersKycComponent } from './view-security-workers-kyc.component';

describe('ViewSecurityWorkersKycComponent', () => {
  let component: ViewSecurityWorkersKycComponent;
  let fixture: ComponentFixture<ViewSecurityWorkersKycComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSecurityWorkersKycComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSecurityWorkersKycComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
