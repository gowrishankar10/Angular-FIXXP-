import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSecurityWorkersKycDocComponent } from './view-security-workers-kyc-doc.component';

describe('ViewSecurityWorkersKycDocComponent', () => {
  let component: ViewSecurityWorkersKycDocComponent;
  let fixture: ComponentFixture<ViewSecurityWorkersKycDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSecurityWorkersKycDocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSecurityWorkersKycDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
