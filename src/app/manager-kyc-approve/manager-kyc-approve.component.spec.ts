import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerKycApproveComponent } from './manager-kyc-approve.component';

describe('ManagerKycApproveComponent', () => {
  let component: ManagerKycApproveComponent;
  let fixture: ComponentFixture<ManagerKycApproveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerKycApproveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerKycApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
